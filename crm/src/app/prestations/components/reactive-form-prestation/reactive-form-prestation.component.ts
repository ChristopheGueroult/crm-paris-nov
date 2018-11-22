import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-reactive-form-prestation',
  templateUrl: './reactive-form-prestation.component.html',
  styleUrls: ['./reactive-form-prestation.component.scss']
})
export class ReactiveFormPrestationComponent implements OnInit {
  public states = Object.values(State);
  public form: FormGroup;
  private init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      tauxTva: [this.init.tauxTva],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      state: [this.init.state],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

  public isError(fcName): boolean {
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }

}
