import { Component, Input } from '@angular/core';

/**
 * Generated class for the LerClassesComunsDeGrafosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ler-classes-comuns-de-grafos',
  templateUrl: 'ler-classes-comuns-de-grafos.html'
})
export class LerClassesComunsDeGrafosComponent {
  @Input('nomeDeLicao')
  nomeDeLicao:string;
  text: string;

  

 public dadosSlidesCompleto:Array<any> = [
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-1-vertice.png', equation:'K_{1}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-2-vertice.png', equation:'K_{2}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-3-vertice.png', equation:'K_{3}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-4-vertice.png', equation:'K_{4}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-5-vertice.png', equation:'K_{5}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-6-vertice.png', equation:'K_{6}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-7-vertice.png', equation:'K_{7}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-8-vertice.png', equation:'K_{8}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-9-vertice.png', equation:'K_{9}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-10-vertice.png', equation:'K_{10}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-11-vertice.png', equation:'K_{11}'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/completo-12-vertice.png', equation:'K_{12}'}
  ];


  public dadosRegular:Array<any> = [
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/regular-0.png', equation:'0-regular'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/regular-1.png', equation:'1-regular'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/regular-2.png', equation:'2-regular'},
    {url: '../../assets/imgs/teoria/classes-comuns-de-grafos/regular-3.png', equation:'3-regular'},
  
  ]


  


  constructor() {
    console.log('Hello LerClassesComunsDeGrafosComponent Component');
    this.text = 'Hello World';
   
    
  }

}
