import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})

export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  // private sub: Subscription;
  constructor(
    private ps: PrestationService,
  ) {
  }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
    this.headers = [
      'type',
      'client',
      'nb jours',
      'tjm ht',
      'total HT',
      'total TTC',
      'state',
      'delete',
      'edit'
    ];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
