import { Injectable } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  async getGeolocation(): Promise<GeolocationPosition> {
    const position = await Geolocation.getCurrentPosition();
    return position;
  }
  
  constructor() { }
}
