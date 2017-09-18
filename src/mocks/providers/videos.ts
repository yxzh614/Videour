import { Video } from './../../models/video';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Videos {
  videos: Video[] = [];

  defaultVideo: Video = {
    title: "vtit",
    introduce: "int",
    videoURL: new URL("file", "0"),
  };


  constructor(public http: Http) {
    let videos = [
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      },
      {
        title: "vtit",
        introduce: "int",
        videoURL: new URL("file", "0"),
      }
    ];

    for (let video of videos) {
      this.videos.push(new Video(video.title, video.introduce, video.videoURL));
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
