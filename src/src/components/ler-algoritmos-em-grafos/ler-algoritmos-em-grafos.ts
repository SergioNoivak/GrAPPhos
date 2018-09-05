import { Component, Input } from '@angular/core';

/**
 * Generated class for the LerAlgoritmosEmGrafosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-algoritmos-em-grafos',
  templateUrl: 'ler-algoritmos-em-grafos.html'
})
export class LerAlgoritmosEmGrafosComponent {

  @Input('nomeDeLicao')

  nomeDeLicao:string;
  text: string;

  constructor() {
    console.log('Hello LerAlgoritmosEmGrafosComponent Component');
    this.text = 'Hello World';
  }

}
