import { Video } from './../../models/video';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Videos {
  videos: Video[] = [];

  defaultVideo: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let videos = [
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

    for (let video of videos) {
      this.videos.push(new Video(video));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.videos;
    }

    return this.videos.filter((video) => {
      for (let key in params) {
        let field = video[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return video;
        } else if (field == params[key]) {
          return video;
        }
      }
      return null;
    });
  }

  add(video: Video) {
    this.videos.push(video);
  }

  delete(video: Video) {
    this.videos.splice(this.videos.indexOf(video), 1);
  }
}
