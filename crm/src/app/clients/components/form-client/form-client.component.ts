import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient);
  public form: FormGroup;
  private init = new Client();
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      nom: [
        this.init.nom,
        Validators.required
      ],
      email: [
        this.init.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      state: [this.init.state],
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }

  public isError(fcName): boolean {
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }

}
