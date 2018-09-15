import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarConstelacoes_2Page } from './explorar-constelacoes-2';
import { KatexModule } from 'ng-katex/ng-katex.js';

@NgModule({
  declarations: [
    ExplorarConstelacoes_2Page,
  ],
  imports: [
    IonicPageModule.forChild(ExplorarConstelacoes_2Page),
    KatexModule
  ],
})
export class ExplorarConstelacoes_2PageModule {}
