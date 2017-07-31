import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewVideoPage } from './new-video';

@NgModule({
  declarations: [
    NewVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewVideoPage),
  ],
})
export class NewVideoPageModule {}
