import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './user-interface/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
