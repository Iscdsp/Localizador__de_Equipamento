import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricComponent } from './components/historic/historic.component';
import { MapModule } from './map/map.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [AppComponent, HistoricComponent],
  imports: [BrowserModule, GoogleMapsModule, AppRoutingModule, MapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
