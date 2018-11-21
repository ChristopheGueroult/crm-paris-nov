import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = Object.values(State);
  constructor(
    private ps: PrestationService
  ) {
  }

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
