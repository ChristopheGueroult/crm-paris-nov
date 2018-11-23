import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailPrestationComponent } from './components/client-detail-prestation/client-detail-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    children: [
      { path: 'detail', component: DetailPrestationComponent },
      { path: 'client', component: ClientDetailPrestationComponent },
    ]
  },
  { path: 'add', component: PageAddPrestationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
