import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges();
  }

  // get collection
  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  // add presta
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }


  update(item: Client, state?: StateClient): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
  }
}
