import { MainPage } from './../pages';
import { User } from './../../providers/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
  constructor(public navCtrl: NavController,
      public user:User,
      public navParams: NavParams,
      public toastCtrl:ToastController) {
  }
doLogin(){
  this.navCtrl.push(MainPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
