import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery(); // utilizando o metodo a partir do click do botão
}

remover(){
  this.photoService.deletarFoto();// utilizando o metodo a partir do click do botão
}

async ngOnInit() {
  await this.photoService.loadSaved();// utilizando o metodo a partir do click do botão
}
}
