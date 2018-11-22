import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private cs: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Client) {
    this.cs.add(item);
    this.router.navigate(['clients']);
  }

}
