import { UserCenterPage } from './../user-center/user-center';
import { Accounts } from './../../mocks/providers/accounts';
import { sAccount } from './../../models/s-account';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  public friends: sAccount[];
  constructor(public accounts: Accounts, public navCtrl: NavController, public navParams: NavParams) {
    this.friends = accounts.getFriends()
  }

  gotoFriendsIndex(friend) {
    console.log(friend)
    this.navCtrl.push(UserCenterPage, {
      userId: friend.userId,
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }
}
