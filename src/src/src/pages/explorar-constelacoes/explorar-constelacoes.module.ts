import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarConstelacoesPage } from './explorar-constelacoes';
import { KatexModule } from 'ng-katex/ng-katex.js';

@NgModule({
  declarations: [
    ExplorarConstelacoesPage,
  ],
  imports: [KatexModule,
    IonicPageModule.forChild(ExplorarConstelacoesPage),
  ],
})
export class ExplorarConstelacoesPageModule {}
