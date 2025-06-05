import { Injectable } from '@angular/core';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  async shareContent(title: string, text: string, url: string, dialogTitle: string) {
    try {
      await Share.share({
        title,
        text,
        url,
        dialogTitle
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  }
}