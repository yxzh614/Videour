import { myHttp } from './../../mocks/providers/myHttp';
import { Account } from "./../../models/account";
import { MainPage } from "./../pages";
import { User } from "./../../providers/user";
import { Component, ErrorHandler } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  account: Account = {
    email: "test@example.com",
    password: "test"
  };
  res:boolean = false;
  errorMessage;
  loginOK: boolean;
  constructor(
    public navCtrl: NavController,
    public user: User,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public myHttp: myHttp
  ) {}
  doLogin() {
    this.myHttp.login(this.account).subscribe(
      res => this.res = res,
      error => this.errorMessage = <any>error
    )
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
