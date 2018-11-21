import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [TotalPipe, TableauComponent],
  exports: [TotalPipe, TableauComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
