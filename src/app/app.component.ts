import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None  // bunu demezsek CSS properties nedeniyle harita gelmiyor
})
export class AppComponent {
  
  mapOptions: google.maps.MapOptions = {
    zoom : 30,
    disableDefaultUI: true,           // aslında bu disableDefaultUI diyerek alttaki 4 control ün hepsini yapmış olduk
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
 };
 marker1 = { position: { lat: 40.28, lng: 29.0 } };
 marker2 = { position: { lat: 40.2, lng: 28.9 } };
 marker3 = { position: { lat: 40.1, lng: 29.1 } };

 markers = [this.marker1, this.marker2, this.marker3];

 @ViewChild(GoogleMap) map!: GoogleMap;

 ngAfterViewInit() {
   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //Add 'implements AfterViewInit' to the class.
   const bounds = this.getBounds(this.markers);
   this.map.googleMap?.fitBounds(bounds);
 }

 getBounds(markers: any) {
   let north;
   let south;
   let east;
   let west;

   for (const marker of markers) {
     // set the coordinates to marker's lat and lng on the first run.
    // if the coordinates exist, get max or min depends on the coordinates.
    north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
    south = south !== undefined ? Math.min(north, marker.position.lat) : marker.position.lat;
    east = east !== undefined ? Math.max(north, marker.position.lng) : marker.position.lng;
    west = west !== undefined ? Math.min(north, marker.position.lng) : marker.position.lng;
   };

   const bounds = { north, south, east, west };

   return bounds;

 }
}
