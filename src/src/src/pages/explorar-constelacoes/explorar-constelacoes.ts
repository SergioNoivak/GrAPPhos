import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiguracoesDeCriacao } from '../../model/configuracoesDeCriacao';
import { GrafoGeralProvider } from '../../providers/grafo-geral/grafo-geral';
import { ConfiguradorDeAreaDeDesenho } from '../../model/configuradorDeAreaDeDesenho';
import * as cytoscape from './../../assets/cytoscape'
import { ArquitetoDeGrafoTeorico } from '../../model/ArquitetoDeGrafoTeorico';
import * as jquery from './../../assets/jquery.min.js'
import { KatexOptions } from 'ng-katex';


/**
 * Generated class for the ExplorarConstelacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar-constelacoes',
  templateUrl: 'explorar-constelacoes.html',
})
export class ExplorarConstelacoesPage {
  @ViewChild('verticesTag') 
  verticesTag:ElementRef;

  @ViewChild('canvas') 
  divCanvas:ElementRef;


  vertices:string="\\{ \\}";
  arestas:string="\\{ \\}";


  isSelecionadoBotao:any;
  configuracoesDeCriacao:ConfiguracoesDeCriacao;
  grafoInterface:any;
  configuradorDeAreaDeDesenho:ConfiguradorDeAreaDeDesenho;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();
  }

  ionViewDidLoad() {
    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    this.grafoInterface= this.configuradorDeAreaDeDesenho.gerarGrafo(this.configuracoesDeCriacao,"cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface,this.configuracoesDeCriacao,"explorar-constelacoes-1");
   
    
    
    
  }
  


  funcao(){
    
    
    let arquitetoDeGrafoTeorico:ArquitetoDeGrafoTeorico = new ArquitetoDeGrafoTeorico();
   let GrafoTeorico =arquitetoDeGrafoTeorico.construirGrafoTeorico(this.grafoInterface,1);
   this.vertices =' \\{ ';
   this.arestas =' \\{ ';

    
for (const key in GrafoTeorico.vetor) {
  if (GrafoTeorico.vetor.hasOwnProperty(key)) {
    const no = GrafoTeorico.vetor[key];
    this.vertices= this.vertices.concat(no.nome+',');
    
    for (const chave in no.Adj) {
    const noAdj = no.Adj[chave];

    this.arestas= this.arestas.concat(no.nome);
    this.arestas= this.arestas.concat(chave+',');

    
    }

    
  }
}
this.vertices=this.vertices.substr(0,this.vertices.length-1);
this.arestas=this.arestas.substr(0,this.arestas.length-1);

this.vertices=this.vertices.concat('\\}');
this.arestas=this.arestas.concat('\\}');



}

clicouDimensionar(){

  this.configuracoesDeCriacao.possivelCriarNo=0;
}

clicouGerar(){

  this.configuracoesDeCriacao.possivelCriarNo=1;
}
}
