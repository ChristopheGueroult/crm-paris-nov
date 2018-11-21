import { Client } from 'src/app/shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
    id: 'mlkj',
    nom: 'Formation',
    email: 'Modis',
  }),
  new Client({
    id: 'dfh',
    nom: 'Coaching',
    email: 'Nemesys',
  }),
];
