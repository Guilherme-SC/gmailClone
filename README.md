# gmailClone
Clone do Gmail(mobile) utilizando como base: https: https://cutt.ly/mnYNRU9

## Considerações Iniciais 

Inicialmente tivemos o plano de criar o clone UI(*User Interface*) do Gmail carregando as informações a partir do [API do Gmail](https://developers.google.com/gmail/api/), 
devido ao curto tempo optamos colocar as informações através de JSONs(*JavaScript Object Notation*) e pela estruturação do código. Como nova funcionalidades 
decidimos implementar a utilização da câmera para tirar fotos e as salvar posteriormente.

## Interface
### Home
Clonamos a UI do Gmail de forma não funcional de seus componentes, de forma fidedigna. Preferimos escolher um design mais minimalista e assertivo como premissa do projeto: 

![intefaceHome](https://cdn.discordapp.com/attachments/849695286049898539/852380586189652029/evidencia1.png)

No arquivo tab1.page.html colocamos a estrutura base dessa interface. No exemplo abaixo estamos carregando o conteúdo de e-mails recebidos através da atribuição ao *ngFor   Ex:`` <ion-item class="ion-no-padding" *ngFor="let i of [].constructor(2); let index = index">`` onde no construtor passamos o parâmetro no ``[].constructor(2);`` a quantidade de emails que devem ser renderizados na tela nesse caso 2.
``

  
```
  <ion-item class="ion-no-padding" *ngFor="let i of [].constructor(2); let index = index">
        <ion-avatar slot="start">
          <img src="../../assets/icon/gabigol.jpg" alt="Logo do usuario">
        </ion-avatar>
        <ion-label>
          <h2>Gabriel B. Lemos</h2>
          <h3>TCC</h3>
          <p>Estou falando com os psicólogos para o vídeo</p>
        </ion-label>
        <p slot="end" class="other-info">
          <span class="time">03:50 pm</span>
          <span>
            <ion-icon [name]="index % 2 == 0 ? 'star-otline' : 'star' " class="star"></ion-icon>
          </span>
        </p>
  </ion-item> 
```

### Menu Lateral
Quanto ao menu lateral utilizamos o arquivo app.component.html para realizar sua estruturação e o arquivo app.component.scss para sua estilização:

![intefaceMenu](https://cdn.discordapp.com/attachments/849695286049898539/852380591126740992/evidencia2.png)

Num trecho de código retirado do arquivo app.component.html podemos perceber a forma pela como o conteúdo será renderizado na aplicação:
```
 <ion-list id="inbox-list">
    <ion-list-header>Gmail</ion-list-header>
    <ion-menu-toggle ato-hide="false" *ngFor="let p of appPages; let i = index">
      <ion-item (click)="selectedIndex == i" routerDirection="root" [routerLink]="[p.url]" lines="none"
       details="false" [class.selected]="selectedIndex == i">
        <ion-icon slot="start" [name]="p.icon + '-outline'"></ion-icon>
        <ion-label>{{p.title}}</ion-label>
        <span slot="end">{{(i+1) * 4}}+ new</span>
      </ion-item>
    </ion-menu-toggle>
 </ion-list>
```

O JSON do arquivo app.component.ts está sendo utilizado para a criação do conteúdo que será renderizado no menu lateral:

```
public appPages = [
    {
      title: 'Todas as Cx. entrada',
      url: '/tabs/tab1',
      icon: 'albums'
    },
    {
      title: 'Primário',
      url: '/tabs/tab1',
      icon: 'chatbox-ellipses'
    },
    {
      title: 'Social',
      url: '/tabs/tab1',
      icon: 'person'
    },
    {
      title: 'Promoções',
      url: '/tabs/tab1',
      icon: 'pricetag'
    }
  ]
```

### Meet
Na página Meet implementamos a funcionalidade de galeria, a qual abordaremos ainda nesta documentação. A interface dessa página foi implementada através do 
arquivo tab2.page.html na qual inserimos os seus elementos visuais.

Aqui temos a um print da página meet:

![intefaceMenu](https://cdn.discordapp.com/attachments/849695286049898539/852380596290453534/evidencia3.png)

Aqui temos o código:
```
 <ion-header>
  <ion-toolbar>
    <ion-title>Photo Gallery</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

  <ion-grid>
    <ion-row>
      <ion-col
        size="6"
        *ngFor="let photo of photoService.photos; index as position"
      >
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <ion-fab ion-fab vertical="bottom" horizontal="left" slot="fixed" >
    <ion-fab-button (click)="remover()">
      <ion-icon name="Trash"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```
## Nova Funcionalidade 
O Gmail é um app bastante completo com muitas funcionalidades, isso acabou gerando muito trabalho na hora de pensar "qual deveria ser a nova funcionalidade".
No decorrer das pesquisas para encontrarmos uma boa nova função pensamos em desenvolver uma função de mídia(câmera, áudio e vídeo), mas ocorreram alguns erros na construção e na execução do projeto em vista desse acontecimento decidimos diminuir a dificuldade e gerar uma funcionalidade de câmera, a qual o gmail não possui. 


Para a construção da nova Funcionalidade decidimos implementar os serviços necessários para o funcionamento da câmera, a partir do capacitor. Configuramos o sistema de forma correta utilizando os seguintes comandos:
```
npm install -g @ionic/cli native-run cordova-res
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
npm install @ionic/pwa-elements

```
Importamos suas devidas bibliotecas para a construção do sistema no main.ts, no tab2.page.ts e no serviço que geramos usando ```ionic g service services/photo```
e neste serviço gerado adicionamos o seguinte código para o funcionamento da câmera:


```
public async addNewToGallery() {
  // Pegar a Foto
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
```
No Tab2.page.ts: 
```
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```
Demonstração da câmera:

![Newfuncionalidade](https://cdn.discordapp.com/attachments/849695286049898539/852380605404545065/evidencia4.png)






