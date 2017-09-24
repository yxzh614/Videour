import { LoginPage } from "./../login/login";
import { Accounts } from "./../../mocks/providers/accounts";
import { Account } from "./../../models/account";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-center",
  templateUrl: "user-center.html"
})
export class UserCenterPage {
  myself: boolean;
  account: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public accounts: Accounts
  ) {
    if(!navParams.data.userId || navParams.data.userId === window.localStorage.userId) {
      this.myself = true;
    } else {
      this.myself = false;
    }
    this.account = accounts.getAccountFromUser();
  }
  logOut() {
    window.localStorage.user = "";
    this.navCtrl.push(LoginPage);
  }
  ionViewDidEnter() {
    if (!window.localStorage.user) {
      this.navCtrl.push(LoginPage);
    }
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad UserCenterPage");
  }
}
