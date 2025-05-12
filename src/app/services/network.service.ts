import { Injectable } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  async getNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    return status;
  }
  constructor() { }
}
