import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './template-a/template-a.component';
import { TemplateBComponent } from './template-b/template-b.component';

@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  exports: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
