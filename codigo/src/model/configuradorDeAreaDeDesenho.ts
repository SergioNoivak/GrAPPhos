import { PintorGeral } from "./PintorGeral";
import * as cytoscape from './../assets/cytoscape'
import { BuscadorDeJSON } from './buscadorDeJSON';

export class ConfiguradorDeAreaDeDesenho extends PintorGeral {

  constructor (){
    super()
  }
  public gerarGrafo(nomeDiv:string){
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
    return cy;
  }
  public adicionarEventosAreaDeDesenhoGrafoGeral(cy:any, configuracaoDeEstilo?:any){
    cy.on('tapstart',(evt)=>{
        if(this.possivelCriarNo){
          this.contagem++;
          var no:any= this.pintarNo(cy,evt,configuracaoDeEstilo);
          this.adicionarEventoNo(no, cy);
        }
      });
    }
  public popularPorJson(grafoInterface:any,http:any,constelacao:string){
    BuscadorDeJSON.construirGrafoDeJSON(grafoInterface,http,constelacao)
  }
  private adicionarEventoNo(no:any,cy:any){
    no.on("tapstart ",evt=>{

        if(this.possivelCriarAresta){
          if(this.noAnterior.id()!=no.id())
            this.pintarAresta(cy,no);
          this.possivelCriarAresta=0;
        }

        this.possivelCriarNo=0;

      })

      no.on("tapend ",evt=>{
        this.possivelCriarNo=1;

      })

      no.on("taphold ",evt=>{
        this.possivelCriarAresta=1;
        this.noAnterior=no;
      })
  }

  // Adiciona eventos especificos ao grafo de redes
  public eventoDeRedes(cy:any){
    cy.on('tap','node', function(evnt){
      // id do nó
      const id = "#"+evnt.target.id();
      const conectados = cy.$(id).connectedEdges();
      console.log(conectados);
      alert(conectados);
    })
  }
}
