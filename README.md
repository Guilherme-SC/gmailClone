# gmailClone
Clone do gmail(mobile) utilizando como base: https: https://cutt.ly/mnYNRU9

## Considerações Iniciais 

Inicialmente tivemos o plano de criar o clone UI(*User Interface*) do Gmail carregando as informações a partir do [API do Gmail](https://developers.google.com/gmail/api/), 
devido ao curto tempo optamos colocar as informações através de JSONs(*JavaScript Object Notation*) e pela estruturação do código. Como nova funcionalidades 
decidimos implementar a utilização da câmera para tirar fotos e as salvar posteriormente.

## Interface
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

### Menu
![intefaceMenu](https://cdn.discordapp.com/attachments/849695286049898539/852380591126740992/evidencia2.png)

