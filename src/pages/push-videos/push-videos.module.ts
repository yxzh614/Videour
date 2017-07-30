import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushVideosPage } from './push-videos';

@NgModule({
  declarations: [
    PushVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(PushVideosPage),
  ],
})
export class PushVideosPageModule {}
