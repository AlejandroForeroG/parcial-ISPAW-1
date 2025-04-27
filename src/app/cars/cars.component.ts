import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';
import { Car} from './models/car.model';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  standalone: false,
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCarros().subscribe((cars) => {
      this.cars = cars;
      console.log('cars', this.cars);
    });
  }

  getTotals(marca: string){
    return this.cars.filter(car => car.marca === marca).length;
  }

}
