import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { PupfieService, Photo } from '../services/pupfie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public pupfieservice: PupfieService,
    public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.pupfieservice.loadSaved();
  }

  addPhotoToGallery() {
    this.pupfieservice.addNewToGallery();
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.pupfieservice.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }

}




