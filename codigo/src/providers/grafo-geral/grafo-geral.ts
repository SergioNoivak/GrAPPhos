import { Injectable } from '@angular/core';
import { ConfiguracoesDeCriacao } from '../../model/configuracoesDeCriacao';
import { PintorGeral } from '../../model/PintorGeral';
import * as cytoscape from './../../assets/cytoscape'
/*
  Generated class for the GrafoGeralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrafoGeralProvider {
  
  pintorGeral:PintorGeral;
  public gerarGrafo(configuracoesDeCriacao:ConfiguracoesDeCriacao,document){
   
    
    document.getElementById('cy').setAttribute("style", "background-color:red; ");
    var cy:any = window.onload = cytoscape({
      container: document.getElementById('cy'),
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',

          }
        }
      ]
    });
    this.pintorGeral = new PintorGeral();
  



  return cy;

  }


  public adicionarEventosAreaDeDesenhoGrafoGeral(cy:any,configuracoesDeCriacao:ConfiguracoesDeCriacao){
    cy.on('tapstart',(evt)=>{
      if(configuracoesDeCriacao.possivelCriarNo){
        configuracoesDeCriacao.contagem++;
        var no:any= this.pintorGeral.pintarNo(cy,configuracoesDeCriacao,evt);
        this.adicionarEventoNo(no,configuracoesDeCriacao,cy);
        
        }
        });
  }



  private adicionarEventoNo(no:any,configuracoesDeCriacao:ConfiguracoesDeCriacao,cy:any){
  
    
    no.on("tapstart ",evt=>{
      if(configuracoesDeCriacao.possivelCriarAresta){


        if(configuracoesDeCriacao.noAnterior.id()!=no.id())
        this.pintorGeral.pintarAresta(cy,no);
        configuracoesDeCriacao.possivelCriarAresta=0;

          

      }

      configuracoesDeCriacao.possivelCriarNo=0;
    
    })


    no.on("tapend ",evt=>{
      configuracoesDeCriacao.possivelCriarNo=1;
    
    })


    no.on("taphold ",evt=>{
      configuracoesDeCriacao.possivelCriarAresta=1;
      configuracoesDeCriacao.noAnterior=no;
    })

     


  }






  constructor() {
  
    
  
  }




}
