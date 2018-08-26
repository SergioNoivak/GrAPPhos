import { Injectable } from '@angular/core';

import * as cytoscape from './../../assets/cytoscape'


/*
  Generated class for the GrafoGeralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrafoGeralProvider {



  public gerarGrafo(){
    var cy:any = window.onload = cytoscape({
      container: document.getElementById('cy'),
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)'
          }
        }
      ]
  });
  
  return cy;

  }


  public adicionarNo(cy:any,contagem:any){
    cy.on('tap',(evt)=>{

      contagem++;
  
      console.log(evt);
  
      console.log(evt);
       cy.add(
          {
            id: 1,
            group: "nodes",
            data: { weight: 10, label: contagem},
            position: { x: evt.position.x, y:evt.position.y  },
            
          
          });
        });
  
  }


  constructor() {
  
    
  
  }




}
