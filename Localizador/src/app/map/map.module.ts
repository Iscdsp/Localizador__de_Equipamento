import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapService } from './services/map.service';
import { HistoricCargoTruckComponent } from './historic-cargo-truck/historic-cargo-truck.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MapComponent, HistoricCargoTruckComponent],
  imports: [GoogleMapsModule, CommonModule, NgSelectModule, HttpClientModule],
  providers: [MapService],
})
export class MapModule {}
