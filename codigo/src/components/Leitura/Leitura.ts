import { Component, Input } from '@angular/core';


/**
 * Generated class for the LerIntroducaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'Leitura',
  templateUrl: 'Leitura.html'
})
export class Leitura {

  text: string;
  

teste:number = 5;

  @Input('nomeDeLicao') 
  nomeDeLicao: string;




  constructor() {
    console.log('Hello LerIntroducaoComponent Component');
    this.text = 'Hello World';
  }

}
