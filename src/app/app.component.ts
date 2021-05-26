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
      title: 'All inboxes',
      url: '/tabs/tab1',
      icon: 'albums'
    },
    {
      title: 'Primary',
      url: '/tabs/tab1',
      icon: 'chatbox-ellipses'
    },
    {
      title: 'Social',
      url: '/tabs/tab1',
      icon: 'person'
    },
    {
      title: 'Promotions',
      url: '/tabs/tab1',
      icon: 'pricetag'
    }
  ]

  public labels = [
    {
      title: 'Starred',
      url: '/tabs/tab1',
      icon: 'star'
    },
    {
      title: 'Snozzed',
      url: '/tabs/tab1',
      icon: 'timer'
    },
    {
      title: 'Important',
      url: '/tabs/tab1',
      icon: 'pricetag'
    },
    {
      title: 'Sent',
      url: '/tabs/tab1',
      icon: 'send'
    },
    {
      title: 'Scheduled',
      url: '/tabs/tab1',
      icon: 'hourglass'
    },
    {
      title: 'Outbox',
      url: '/tabs/tab1',
      icon: 'chatbubble'
    },
    {
      title: 'Drafts',
      url: '/tabs/tab1',
      icon: 'document'
    },
    {
      title: 'All main',
      url: '/tabs/tab1',
      icon: 'mail-open'
    },
    {
      title: 'Spam',
      url: '/tabs/tab1',
      icon: 'alert-circle'
    },
    {
      title: 'Bin',
      url: '/tabs/tab1',
      icon: 'trash'
    },
    {
      title: 'Unwanted',
      url: '/tabs/tab1',
      icon: 'trash-bin'
    },
  ]
  constructor() {}
}
