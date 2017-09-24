
export class Video {

  title: string;
  introduce: string;
  videoURL: URL;
  constructor(title: string, introduce: string, videoURL: URL) {
    // Quick and dirty extend/assign fields to this model
    this.title = title;
    this.introduce = introduce;
    this.videoURL = videoURL;
  }

}
