import { UserCenterPage } from './../user-center/user-center';
import { FriendsPage } from './../friends/friends';
import { NewVideoPage } from './../new-video/new-video';
import { SearchPage } from './../search/search';
import { Component } from '@angular/core';

import { PushVideosPage } from '../push-videos/push-videos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PushVideosPage;
  tab2Root = SearchPage;
  tab3Root = NewVideoPage;
  tab4Root = FriendsPage;
  tab5Root = UserCenterPage;

  constructor() {

  }
}
