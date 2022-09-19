import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapModule } from './map/map.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, GoogleMapsModule, AppRoutingModule, MapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
