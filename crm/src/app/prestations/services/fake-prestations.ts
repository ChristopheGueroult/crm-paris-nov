import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'mlkj',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 10
  }),
  new Prestation({
    id: 'dfh',
    typePresta: 'Coaching',
    client: 'Nemesys',
    nbJours: 20
  }),
];
