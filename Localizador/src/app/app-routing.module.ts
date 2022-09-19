import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricCargoTruckComponent } from './map/historic-cargo-truck/historic-cargo-truck.component';
import { MapComponent } from './map/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
