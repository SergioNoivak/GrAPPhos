import { Component, Input } from '@angular/core';

/**
 * Generated class for the LerIsomorfismoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-isomorfismo',
  templateUrl: 'ler-isomorfismo.html'
})
export class LerIsomorfismoComponent {
  @Input('nomeDeLicao')



  nomeDeLicao:string;
  text: string;

  constructor() {
    console.log('Hello LerIsomorfismoComponent Component');
    this.text = 'Hello World';
  }

}
