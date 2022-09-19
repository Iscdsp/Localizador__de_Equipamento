import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricCargoTruckComponent } from './historic-cargo-truck.component';

describe('HistoricCargoTruckComponent', () => {
  let component: HistoricCargoTruckComponent;
  let fixture: ComponentFixture<HistoricCargoTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricCargoTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricCargoTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
