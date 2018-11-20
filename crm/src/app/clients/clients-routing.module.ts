import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
