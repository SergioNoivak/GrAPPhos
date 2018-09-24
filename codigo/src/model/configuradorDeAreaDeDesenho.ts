import { PintorGeral } from "./PintorGeral";
import { ConfiguracoesDeCriacao } from "./configuracoesDeCriacao";
import * as cytoscape from './../assets/cytoscape'
import { BuscadorDeJSON } from './buscadorDeJSON';






export class ConfiguradorDeAreaDeDesenho{


    pintorGeral:PintorGeral;
    public gerarGrafo(configuracoesDeCriacao:ConfiguracoesDeCriacao,nomeDiv:string){
          
      var cy:any = window.onload = cytoscape({
        container: document.getElementById(nomeDiv),
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
  
  
    public adicionarEventosAreaDeDesenhoGrafoGeral(cy:any,configuracoesDeCriacao:ConfiguracoesDeCriacao,configuracaoDeEstilo?:any){
      cy.on('tapstart',(evt)=>{
        if(configuracoesDeCriacao.possivelCriarNo){
          configuracoesDeCriacao.contagem++;
          var no:any= this.pintorGeral.pintarNo(cy,configuracoesDeCriacao,evt,configuracaoDeEstilo);
          this.adicionarEventoNo(no,configuracoesDeCriacao,cy);
          
          }
          });
    }
  


  public popularPorJson(grafoInterface:any,http:any,constelacao:string){

      BuscadorDeJSON.construirGrafoDeJSON(grafoInterface,http,constelacao)

    }
  
  
    private adicionarEventoNo(no:any,configuracoesDeCriacao:ConfiguracoesDeCriacao,cy:any){
    
      
      no.on("tapstart ",evt=>{
        if(configuracoesDeCriacao.possivelCriarAresta){
  
  
          if(configuracoesDeCriacao.noAnterior.id()!=no.id())
          var aresta = this.pintorGeral.pintarAresta(cy,configuracoesDeCriacao,no);
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
  
  
  



}