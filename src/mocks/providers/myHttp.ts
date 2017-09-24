import { Observable } from 'rxjs';
import { Account } from "./../../models/account";
import { Injectable } from "@angular/core";
import { Http, Request, Response } from "@angular/http";

@Injectable()
export class myHttp {

  constructor(public http: Http) {

  }

  loginURL: string = "";
  checkUserExistURL: string = "";
  login(account: Account) {
    let body = JSON.stringify(account);
    return this.http.post(this.loginURL, body).map(this.extractData).catch(this.handleError);
  }

  checkUserNameExist(name: string) {
    let body = JSON.stringify(name);
    return this.http.post(this.checkUserExistURL, body).map(this.extractData).catch(this.handleError);
  }

  signUp(account: Account) {
    let body = JSON.stringify(name);
    return this.http.post(this.loginURL, body).map(this.extractData).catch(this.handleError);
  }

  public extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : `Server error`;
      console.log(errMsg);
      return Observable.throw(errMsg);
  }
}
