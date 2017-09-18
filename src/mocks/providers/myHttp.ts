import { Account } from "./../../models/account";
import { Injectable } from "@angular/core";
import { Http, Request, Response } from "@angular/http";

@Injectable()
export class myHttp {

  constructor(public http: Http) {}

  loginURL: string = "";

  login(account: Account) {
    let body = JSON.stringify(account);
    return this.http.post(this.loginURL, body).map();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
