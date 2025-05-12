import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    console.log('Photo URI:', image.webPath);
    return image.webPath; // Devuelve la URI de la imagen
    // Puedes usar la URI en una etiqueta <img src={image.webPath} />
  }
  constructor() { }
}
