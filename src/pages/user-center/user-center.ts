import { Accounts } from './../../mocks/providers/accounts';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
account:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public accounts:Accounts) {
this.account=accounts.getAccountFromUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }
}
