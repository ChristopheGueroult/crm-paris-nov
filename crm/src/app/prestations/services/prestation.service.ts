import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  public item$: Subject<Prestation> = new Subject();
  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // map(data => data.map(presta => new Prestation(presta)))
      map((data) => {
        this.presta$.next(data[0]);
        return data.map((presta) => {
          return new Prestation(presta);
        });
      })
    );

    // this.collection$ = this.http.get('urlapi/prestations').pipe(
    //   // map(data => data.map(presta => new Prestation(presta)))
    //   map((data) => {
    //     this.presta$.next(data[0]);
    //     return data.map((presta) => {
    //       return new Prestation(presta);
    //     });
    //   })
    // );
  }

  // get collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addprestation', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
