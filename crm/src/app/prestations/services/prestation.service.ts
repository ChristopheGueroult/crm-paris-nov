import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';

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

  // update item in collection

  // delete item in collection

  // get item by id
}
