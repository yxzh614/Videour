import { Http, Request, Response } from "@angular/http";
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
  loginOK: boolean;
  constructor(
    public navCtrl: NavController,
    public user: User,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http
  ) {}
  doLogin() {
    this.http
      .post("mock/login.json", {
        email: this.account.email,
        password: this.account.password
      })
      .map(this.extractData);
    window.localStorage.user = this.account.email;
    console.log(this.account.email);
    this.navCtrl.push(MainPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
