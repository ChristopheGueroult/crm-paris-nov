import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../services/client.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public states = Object.values(StateClient);
  public faTrashAlt = faTrashAlt;
  @Input() item: Client;
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

  public delete() {
    this.cs.delete(this.item).then((data) => {
      // gérer réponse de l'api
    });
  }

}
