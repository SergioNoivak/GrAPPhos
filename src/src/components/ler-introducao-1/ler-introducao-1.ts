import { Component, Input } from '@angular/core';

/**
 * Generated class for the LerIntroducao_1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-introducao-1',
  templateUrl: 'ler-introducao-1.html'
})
export class LerIntroducao_1Component {


  @Input('nomeDeLicao')



  nomeDeLicao:string;

  text: string;
  
  public escalaGifWidth(fator:number,gifWidth:number){
    return gifWidth*fator;
  }

  public escalaGifHeight(fator:number,gifHeight:number){
    return gifHeight*fator;
  }


  constructor() {
    console.log('Hello LerIntroducao_1Component Component');
    this.text = 'Hello World';
  }

}
