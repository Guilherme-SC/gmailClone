import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, CameraPhoto } from '@capacitor/camera';
import { Capacitor } from '@Capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Foto[] = [];
  private PHOTO_STORAGE: string = "photos";

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    // Pegar Foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    this.photos.unshift({
      filepath: "soon...", // Exibir Foto
      webviewPath: capturedPhoto.webPath
    });
    
    Storage.set({
      key: this.PHOTO_STORAGE, // Salvando Foto
      value: JSON.stringify(this.photos)
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    //this.photos.unshift(savedImageFile);
  }

   public async deletarFoto(){
    await this.photos.pop() //Deletando Foto
  }


  public async loadSaved() {
    // Recuperar dados de array de fotos em cache 
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];
  
    // Maneira mais fácil de detectar durante a execução na web:
     // “quando a plataforma NÃO é híbrida, faça isso” 
    if (!this.platform.is('hybrid')) {
      // Exibe a foto lendo no formato base64 
      for (let photo of this.photos) {
        // Leia os dados de cada foto salva no sistema de arquivos 
        const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data
        });
  
        // Apenas plataforma web: carregue a foto como dados base64 
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  private async savePicture(cameraPhoto: CameraPhoto){
    const base64Data = await this.readAsBase64(cameraPhoto);

     // Grave o arquivo no diretório de dados 
     const fileName = new Date().getTime() + '.jpeg';
     const savedFile = await Filesystem.writeFile({
       path: fileName,
       data: base64Data,
       directory: Directory.Data
     });
 
     if (this.platform.is('hybrid')) {
      // Exibe a nova imagem reescrevendo o caminho 'file: //' para HTTP
      // Detalhes: https://ionicframework.com/docs/building/webview#file-protocol 
       return {
         filepath: savedFile.uri,
         webviewPath: Capacitor.convertFileSrc(savedFile.uri),
       };
     }
     else {
       // Use webPath para exibir a nova imagem em vez de base64, pois é
      // já carregado na memória 
       return {
         filepath: fileName,
         webviewPath: cameraPhoto.webPath
       };
     }
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Leia o arquivo no formato base64
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // Pegue a foto, leia como um blob e converta para o formato base64 
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject; // converter o blob para a base64
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export interface Foto {
  filepath: string; //exportando interface
  webviewPath: string;
}
