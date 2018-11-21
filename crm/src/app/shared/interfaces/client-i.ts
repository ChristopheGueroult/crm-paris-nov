import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: string;
  nom: string;
  email: string;
  state: StateClient;
}
