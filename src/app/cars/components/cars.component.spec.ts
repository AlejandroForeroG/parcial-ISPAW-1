import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsComponent } from './cars.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from '../services/cars.service';
import { By } from '@angular/platform-browser';
import { Car } from '../models/car.model';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let mockCars: Car[];

  beforeEach(async () => {
    // Crear datos de prueba
    mockCars = [
      {
        id: 1,
        marca: "Renault",
        linea: "Sandero",
        referencia: "GT Line",
        modelo: 2020,
        kilometraje: 35000,
        color: "Rojo",
        imagen: "imagen1.jpg"
      },
      {
        id: 2,
        marca: "Chevrolet",
        linea: "Spark",
        referencia: "GT",
        modelo: 2021,
        kilometraje: 28000,
        color: "Azul",
        imagen: "imagen2.jpg"
      },
      {
        id: 3,
        marca: "Nissan",
        linea: "Versa",
        referencia: "Advance",
        modelo: 2022,
        kilometraje: 15000,
        color: "Gris",
        imagen: "imagen3.jpg"
      }
    ];

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CarsComponent],
      providers: [CarsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    component.cars = mockCars; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three cars and a header row', () => {
   
    const rows = fixture.debugElement.queryAll(By.css('tr'));
    
  
    expect(rows.length).toBe(4);

  
    const headerRow = rows[0];
    const headerColumns = headerRow.queryAll(By.css('th'));
    expect(headerColumns.length).toBe(4);
    expect(headerColumns[0].nativeElement.textContent).toContain('ID');
    expect(headerColumns[1].nativeElement.textContent).toContain('Marca');
    expect(headerColumns[2].nativeElement.textContent).toContain('Linea');
    expect(headerColumns[3].nativeElement.textContent).toContain('Modelo');

    
    const carRows = rows.slice(1); 
    carRows.forEach((row, index) => {
      const columns = row.queryAll(By.css('td'));
      expect(columns[0].nativeElement.textContent).toContain(mockCars[index].id);
      expect(columns[1].nativeElement.textContent).toContain(mockCars[index].marca);
      expect(columns[2].nativeElement.textContent).toContain(mockCars[index].linea);
      expect(columns[3].nativeElement.textContent).toContain(mockCars[index].modelo);
    });
  });
});