import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = Object.values(State);
  public init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    this.nItem.emit(this.init);
  }

}
