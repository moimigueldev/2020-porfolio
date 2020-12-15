import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';



@NgModule({
  declarations: [MenuSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuSliderComponent
  ]
})
export class ComponentsModule { }
