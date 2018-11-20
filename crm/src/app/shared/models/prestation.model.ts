import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva = 20;
  tjmHt = 500;
  nbJours = 0;
  state = State.OPTION;
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHt() {
    // console.log('total ht called');

    return this.nbJours * this.tjmHt;
  }
  totalTtc(tva?: number) {
    // console.log('total ttc called');

    if (!tva) {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + tva / 100);
  }
}
