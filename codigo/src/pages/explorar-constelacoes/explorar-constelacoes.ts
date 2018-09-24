import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';


import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';


import {ConfiguracoesDeCriacao} from '../../model/configuracoesDeCriacao';
import {GrafoGeralProvider} from '../../providers/grafo-geral/grafo-geral';
import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';
import * as cytoscape from './../../assets/cytoscape'
import {ConstrutorDeGrafoTeorico} from '../../model/ConstrutorDeGrafoTeorico';
import * as jquery from './../../assets/jquery.min.js'
import {KatexOptions} from 'ng-katex';
import { ConfiguradorDeLatex } from '../../model/ConfiguradorDeLatex';

import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@IonicPage()
@Component({
  selector: 'page-explorar-constelacoes',
  templateUrl: 'explorar-constelacoes.html',
})
export class ExplorarConstelacoesPage {


  //Os conjuntos para o katex do grafo
  vertices: string = "\\{ \\}";
  arestas: string = "\\{ \\}";


  isSelecionadoBotao: any;
  configuracoesDeCriacao: ConfiguracoesDeCriacao;
  grafoInterface: any;
  configuradorDeAreaDeDesenho: ConfiguradorDeAreaDeDesenho;
  test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: HttpClient) {
      this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();



    // let test =  JSON.parse('../../assets/json/constelacoes/test.json');

    
  //  this.http.post('../../assets/json/constelacoes/',this.grafoInterface.json(),httpOptions);
    
}

  ionViewDidLoad() {


    

    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo(this.configuracoesDeCriacao, "cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, this.configuracoesDeCriacao, "explorar-constelacoes-1");
    this.configuracoesDeCriacao.contagem=0;

  }

  atualizarEquacaoLatex() {
    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(this.grafoInterface, 1);
    let objetoEquacoesDoGrafo:any =  ConfiguradorDeLatex.construirFormalismoGrafo(GrafoTeorico)
    this.vertices = objetoEquacoesDoGrafo.vertices;
    this.arestas = objetoEquacoesDoGrafo.arestas;

    
  }

  clicouDimensionar() {

    this.configuracoesDeCriacao.possivelCriarNo = 0;
  }

  clicouGerar() {

    this.configuracoesDeCriacao.possivelCriarNo = 1;
  }

  clicouLimpar(){

    this.grafoInterface.destroy();
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo(this.configuracoesDeCriacao, "cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, this.configuracoesDeCriacao, "explorar-constelacoes-1");
    this.atualizarEquacaoLatex();
    this.configuracoesDeCriacao.contagem=0;
  }
  

  startNextPage(){


    
    console.log(this.grafoInterface.json());
  // console.log(this.test);
    // fs.writeJson('./package.json', {name: 'fs-extra'}, err => {
    //   if (err) return console.error(err)
    
    //   console.log('success!')
    // })

    
     this.navCtrl.push('ExplorarConstelacoes_2Page');
  }


}
