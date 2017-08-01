import { Component } from '@angular/core';

/**
 * Generated class for the UserInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

 user_name: string;
 user_intro: string;

  constructor() {
    console.log('Hello UserInfoComponent Component');
    this.user_name = '李泽维';
    this.user_intro='快乐小二逼';
  }

}
