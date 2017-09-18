import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { MainPage } from './../pages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.localStorage.opened = "true";
  }
login() {
    this.navCtrl.push(LoginPage);
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
