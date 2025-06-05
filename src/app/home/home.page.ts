import { Component } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { NetworkService } from '../services/network.service';
import { CameraService } from '../services/camera.service';
import { IonicModule } from '@ionic/angular';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonicModule ],
  standalone: true
})
export class HomePage {
  latitude: number|null = null;
  longitude: number|null = null;

  networkStatus: string|null = null;
  typeConectionStatus: string|null = null;
  
  picture: string|null = null;

  constructor(
    private geoService: GeolocationService,
    private networkService: NetworkService,
    private cameraService: CameraService,
    private shareService: ShareService
  ) { }

  async getLocation() {
    try {
      const position = await this.geoService.getGeolocation();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  async getNetworkStatus() {
    try {
      const status = await this.networkService.getNetworkStatus();
      this.networkStatus = status.connected ? 'Connected' : 'Disconnected';
      this.typeConectionStatus = status.connectionType;
      console.log('Network status:', status);
    } catch (error) {
      console.error('Error getting network status', error);
    }
  }

  async takePicture() {
    try {
      const picture = await this.cameraService.takePicture();
      this.picture = String(picture);
    } catch (error) {
      console.error('Error taking picture', error);
    }
  }

    compartir() {
    this.shareService.shareContent(
      'Título',
      'Texto a compartir',
      'https://ejemplo.com',
      'Compartir con...'
    );
  }
}
