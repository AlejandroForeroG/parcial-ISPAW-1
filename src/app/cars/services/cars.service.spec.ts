/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarsServiceService } from './cars-service.service';

describe('Service: CarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsServiceService]
    });
  });

  it('should ...', inject([CarsServiceService], (service: CarsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
