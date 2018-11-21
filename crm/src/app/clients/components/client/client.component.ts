import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() item: Client;
  public states = Object.values(StateClient);
  constructor(
    private cs: ClientService
  ) {
  }

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event) {
    const state = event.target.value;
    this.cs.update(this.item, state);
  }

}
