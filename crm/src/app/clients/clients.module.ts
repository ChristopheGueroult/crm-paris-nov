import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent, PageAddClientComponent, AddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
