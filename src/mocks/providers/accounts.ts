import { sAccount } from "./../../models/s-account";
import { Video } from "./../../models/video";
import { Account } from "./../../models/account";
import { Injectable } from "@angular/core";
import { Http, Request, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class Accounts {
  accounts: Account[] = [];
  sAccounts: sAccount[] = [];
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
    let sAccounts = [
      {
        userId: 1,
        headPic: ".jpg",
        nickName: "朋友1",
        introduce: "1",
        fanNumber: 2233,
        careNumber: 333,
        videoListId: 3
      },
      {
        userId: 2,
        headPic: ".jpg",
        nickName: "朋友2",
        introduce: "2",
        fanNumber: 2233,
        careNumber: 333,
        videoListId: 3
      },
      {
        userId: 3,
        headPic: ".jpg",
        nickName: "ladlasdl",
        introduce: "qawedefawegaergawerg",
        fanNumber: 2233,
        careNumber: 333,
        videoListId: 3
      },
      {
        userId: 4,
        headPic: ".jpg",
        nickName: "ladlasdl",
        introduce: "qawedefawegaergawerg",
        fanNumber: 2233,
        careNumber: 333,
        videoListId: 3
      },
      {
        userId: 5,
        headPic: ".jpg",
        nickName: "ladlasdl",
        introduce: "qawedefawegaergawerg",
        fanNumber: 2233,
        careNumber: 333,
        videoListId: 3
      }
    ]
    for (let account of accounts) {
      this.accounts.push(new Account(account.email, account.password));
    }
    for (let saccount of sAccounts) {
      this.sAccounts.push(new sAccount(
        saccount.userId,
        saccount.headPic,
        saccount.nickName,
        saccount.introduce,
        saccount.fanNumber,
        saccount.careNumber,
        saccount.videoListId))
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

  getFriends(): sAccount[] {
    return this.sAccounts;
  }

  private;

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
