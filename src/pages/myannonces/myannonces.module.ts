import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyannoncesPage } from './myannonces';

@NgModule({
  declarations: [
    MyannoncesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyannoncesPage),
  ],
})
export class MyannoncesPageModule {}
