import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PushVideosPage } from '../push-videos/push-videos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PushVideosPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
