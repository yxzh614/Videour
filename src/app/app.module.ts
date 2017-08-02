import { UserCenterPage } from './../pages/user-center/user-center';
import { FriendsPage } from './../pages/friends/friends';
import { NewVideoPage } from './../pages/new-video/new-video';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PushVideosPage } from '../pages/push-videos/push-videos'
import { SearchPage } from './../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PushVideosPage,
    SearchPage,
    NewVideoPage,
    FriendsPage,
    UserCenterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PushVideosPage,
    SearchPage,
    NewVideoPage,
    FriendsPage,
    UserCenterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
