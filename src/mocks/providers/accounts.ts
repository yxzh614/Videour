import { Video } from "./../../models/video";
import { Account } from "./../../models/account";
import { Injectable } from "@angular/core";
import { Http, Request, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class Accounts {
  accounts: Account[] = [];
  activeAccount: Account;
  checkLoginUrl: string = "localhost:3000/user/checkLogin";
  constructor(public http: Http) {
    let accounts = [
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      },
      {
        email: "526@qq.com",
        password: "aaa"
      }
    ];

    for (let account of accounts) {
      this.accounts.push(new Account(account.email, account.password));
    }
  }

  getAccountFromUser(params?: any) {
    return {
      nickName: "ladlasdl",
      introduce: "qawedefawegaergawerg",
      fanNumber: "2233",
      careNumber: "345",
      videoListID: "1"
    };
  }



  private 

  query(params?: any) {
    if (!params) {
      return this.accounts;
    }
    return this.accounts.filter(account => {
      for (let key in params) {
        let field = account[key];
        if (
          typeof field == "string" &&
          field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0
        ) {
          return account;
        } else if (field == params[key]) {
          return account;
        }
      }
      return null;
    });
  }
}
