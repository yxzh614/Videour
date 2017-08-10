import { Accounts } from './../mocks/providers/accounts';
import { Api } from './../providers/api';
import { User } from './../providers/user';
import { LoginPage } from './../pages/login/login';
import { TabsPage } from './../pages/tabs/tabs';
import { WelcomePage } from './../pages/welcome/welcome';
import { UserCenterPage } from './../pages/user-center/user-center';
import { FriendsPage } from './../pages/friends/friends';
import { NewVideoPage } from './../pages/new-video/new-video';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { MyApp } from './app.component';

//import { TabsPage } from '../pages/tabs/tabs';
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
    WelcomePage,LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    UserCenterPage,
    WelcomePage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},User,Api,Accounts
  ]
})
export class AppModule {}
