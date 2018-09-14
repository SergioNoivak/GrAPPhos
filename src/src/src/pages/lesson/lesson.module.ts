import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonPage } from './lesson';
import { KatexModule } from 'ng-katex';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
  declarations: [
    LessonPage,
    
  ],
  imports: [
    IonicPageModule.forChild(LessonPage),
    KatexModule,
    ComponentsModule
  
  ],
})
export class LessonPageModule {}
