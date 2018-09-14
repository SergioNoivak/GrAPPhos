import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualPage } from './manual';
import { PixiModule } from 'angular2pixi';

@NgModule({
  declarations: [
    ManualPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualPage),
    PixiModule
  ],
})
export class ManualPageModule {}
