import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  zoom = 12;
  center = new google.maps.LatLng({
    lat: -24.013849,
    lng: -46.423823,
  });

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = this.center;
    });
  }
}
