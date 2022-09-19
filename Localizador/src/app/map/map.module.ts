import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapService } from './services/map.service';
import { HistoricCargoTruckComponent } from './historic-cargo-truck/historic-cargo-truck.component';

@NgModule({
  declarations: [MapComponent, HistoricCargoTruckComponent],
  imports: [GoogleMapsModule, CommonModule],
  providers: [MapService],
})
export class MapModule {}
