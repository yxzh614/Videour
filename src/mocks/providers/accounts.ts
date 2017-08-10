import { Video } from './../../models/video';
import { Account } from './../../models/account';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Accounts {
  accounts: Account[] = [];

  defaultUser: any = {
    name: "Burt Bear",
    profilePic: "assets/img/speakers/bear.jpg",
    about: "Burt is a Bear."
  };

  constructor(public http: Http) {
    let accounts = [
      {
        name: "Burt Bear",
        profilePic: "assets/img/speakers/bear.jpg",
        about: "Burt is a Bear."
      },
      {
        name: "Charlie Cheetah",
        profilePic: "assets/img/speakers/cheetah.jpg",
        about: "Charlie is a Cheetah."
      },
      {
        name: "Donald Duck",
        profilePic: "assets/img/speakers/duck.jpg",
        about: "Donald is a Duck."
      },
      {
        name: "Eva Eagle",
        profilePic: "assets/img/speakers/eagle.jpg",
        about: "Eva is an Eagle."
      },
      {
        name: "Ellie Elephant",
        profilePic: "assets/img/speakers/elephant.jpg",
        about: "Ellie is an Elephant."
      },
      {
        name: "Molly Mouse",
        profilePic: "assets/img/speakers/mouse.jpg",
        about: "Molly is a Mouse."
      },
      {
        name: "Paul Puppy",
        profilePic: "assets/img/speakers/puppy.jpg",
        about: "Paul is a Puppy."
      }
    ];

    for (let account of accounts) {
      this.accounts.push(new Account(account));
    }
  }

  getAccountFromUser(params?:any){
    return {
      "nickName":"ladlasdl",
      "introduce":"qawedefawegaergawerg",
      "fanNumber":"2233",
      "careNumber":"345",
      "videoListID":"1",
    }
  }
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

  add(account: Account) {
    this.accounts.push(account);
  }

  delete(account: Account) {
    this.accounts.splice(this.accounts.indexOf(account), 1);
  }
}

