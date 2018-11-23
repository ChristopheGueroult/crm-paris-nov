import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from 'src/app/prestations/services/prestation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public item$: Subject<Prestation>;
  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.item$ = this.ps.item$;
  }

}
