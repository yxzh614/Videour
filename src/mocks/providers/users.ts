import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Users {
  users: User[] = [];

  defaultUser: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let users = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let user of users) {
      this.users.push(new User(user));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.users;
    }

    return this.users.filter((user) => {
      for (let key in params) {
        let field = user[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return user;
        } else if (field == params[key]) {
          return user;
        }
      }
      return null;
    });
  }

  add(user: User) {
    this.users.push(user);
  }

  delete(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}

