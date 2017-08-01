import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from "../app/app.component";
@NgModule({
  declarations: [UserInfoComponent],
  imports: [IonicModule.forRoot(MyApp)],
  exports: [UserInfoComponent]
})
export class ComponentsModule {}
