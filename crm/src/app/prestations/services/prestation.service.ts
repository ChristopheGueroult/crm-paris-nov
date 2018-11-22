import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];
  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  // add item in collection
  public add(item: Prestation) {
    this.collection.push(item);
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
    // console.log(item.state);

  }

  // delete item in collection

  // get item by id
}
