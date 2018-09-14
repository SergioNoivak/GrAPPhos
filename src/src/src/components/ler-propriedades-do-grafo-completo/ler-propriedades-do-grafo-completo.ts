import { Component, Input } from '@angular/core';

/**
 * Generated class for the LerPropriedadesDoGrafoCompletoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-propriedades-do-grafo-completo',
  templateUrl: 'ler-propriedades-do-grafo-completo.html'
})
export class LerPropriedadesDoGrafoCompletoComponent {

  text: string;

  @Input('nomeDeLicao')
  nomeDeLicao:string;


  constructor() {
    console.log('Hello LerPropriedadesDoGrafoCompletoComponent Component');
    this.text = 'Hello World';
  }

}
