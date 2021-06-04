import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
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

  public labels = [
    {
      title: 'Com Estrela',
      url: '/tabs/tab1',
      icon: 'star'
    },
    {
      title: 'Snozzed',
      url: '/tabs/tab1',
      icon: 'timer'
    },
    {
      title: 'Importantes',
      url: '/tabs/tab1',
      icon: 'pricetag'
    },
    {
      title: 'Enviados',
      url: '/tabs/tab1',
      icon: 'send'
    },
    {
      title: 'Agendados',
      url: '/tabs/tab1',
      icon: 'hourglass'
    },
    {
      title: 'Caixa de saída',
      url: '/tabs/tab1',
      icon: 'chatbubble'
    },
    {
      title: 'Rascunhos',
      url: '/tabs/tab1',
      icon: 'document'
    },
    {
      title: 'Todos Emails',
      url: '/tabs/tab1',
      icon: 'mail-open'
    },
    {
      title: 'Spam',
      url: '/tabs/tab1',
      icon: 'alert-circle'
    },
    {
      title: 'Lixeira',
      url: '/tabs/tab1',
      icon: 'trash'
    },
    {
      title: 'Indesejados ',
      url: '/tabs/tab1',
      icon: 'trash-bin'
    },
  ]
  constructor() {}
}
