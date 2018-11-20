import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe],
  exports: [TotalPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
