export class sAccount {
  userId: number;
  HeadPic: string;
  nickName: string;
  introduce: string;
  fanNumber: number;
  careNumber: number;
  videoListId: number;

  constructor(
    userId: number,
    headPic: string,
    nickName: string,
    introduce: string,
    fanNumber: number,
    careNumber: number,
    videoListId: number
  ) {
    this.userId = userId;
    this.HeadPic = headPic;
    this.nickName = nickName;
    this.introduce = introduce;
    this.fanNumber = fanNumber;
    this.careNumber = careNumber;
    this.videoListId = videoListId;
  }
}
