import { Component, Input } from '@angular/core';


/**
 * Generated class for the LerMotivacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-motivacao',
  templateUrl: 'ler-motivacao.html'
})
export class LerMotivacaoComponent {
  @Input('nomeDeLicao')
  nomeDeLicao:string;
  text: string;

  constructor() {
    console.log('Hello LerMotivacaoComponent Component');
    this.text = 'Hello World';
  }

}
