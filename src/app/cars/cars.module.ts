import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsService } from './services/cars.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarsComponent],
  exports: [CarsComponent],
  providers: [CarsService]
})
export class CarsModule { }
