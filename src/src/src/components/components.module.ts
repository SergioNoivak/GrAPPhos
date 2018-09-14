import { NgModule } from '@angular/core';
import { MeuComponenteVideoComponent } from './meu-componente-video/meu-componente-video';
import { KatexModule } from 'ng-katex/ng-katex.js';
import { CommonModule } from '@angular/common';
import { LerIntroducao_1Component } from './ler-introducao-1/ler-introducao-1';
import { IonicModule } from 'ionic-angular';
import { Leitura } from './Leitura/Leitura';
import { LerAlgoritmosEmGrafosComponent } from './ler-algoritmos-em-grafos/ler-algoritmos-em-grafos';
import { LerMotivacaoComponent } from './ler-motivacao/ler-motivacao';
import { LerClassesComunsDeGrafosComponent } from './ler-classes-comuns-de-grafos/ler-classes-comuns-de-grafos';
import { LerPropriedadesDoGrafoCompletoComponent } from './ler-propriedades-do-grafo-completo/ler-propriedades-do-grafo-completo';
import { LerIsomorfismoComponent } from './ler-isomorfismo/ler-isomorfismo';
@NgModule({
	declarations: [MeuComponenteVideoComponent,
    Leitura,
    LerIntroducao_1Component,
    LerAlgoritmosEmGrafosComponent,
    LerMotivacaoComponent,
    LerClassesComunsDeGrafosComponent,
    LerPropriedadesDoGrafoCompletoComponent,
    LerIsomorfismoComponent,
    ],
	imports: [

		KatexModule,
		CommonModule,
		IonicModule


	],
	exports: [MeuComponenteVideoComponent,
		Leitura,
    LerIntroducao_1Component,
    LerAlgoritmosEmGrafosComponent,
    LerMotivacaoComponent,
    LerClassesComunsDeGrafosComponent,
    LerPropriedadesDoGrafoCompletoComponent,
    LerIsomorfismoComponent,
    ]
})
export class ComponentsModule {}
