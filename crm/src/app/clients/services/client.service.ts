import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client[];
  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  public get collection(): Client[] {
    return this._collection;
  }

  // set collection
  public set collection(col: Client[]) {
    this._collection = col;
  }

  // add item in collection

  // update item in collection
  public update(item: Client, state: StateClient) {
    item.state = state;
    // console.log(item.state);

  }

  // delete item in collection

  // get item by id
}
