import { Component } from '@angular/core';


import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';
import {ConstrutorDeGrafoTeorico} from '../../model/ConstrutorDeGrafoTeorico';
import { ConfiguradorDeLatex } from '../../model/ConfiguradorDeLatex';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ExplorarConstelacoes_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar-constelacoes-2',
  templateUrl: 'explorar-constelacoes-2.html',
})
export class ExplorarConstelacoes_2Page {


  //Os conjuntos para o katex do grafo
  vertices: string = "\\{ \\}";
  arestas: string = "\\{ \\}";


  isSelecionadoBotao: any;
  grafoInterface: any;
  grafoMaster: ConfiguradorDeAreaDeDesenho;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.grafoMaster = new ConfiguradorDeAreaDeDesenho();
  }

  ionViewDidLoad() {
    this.grafoInterface = this.grafoMaster.gerarGrafo("cyExplorar2");
    this.grafoMaster.popularPorJson(this.grafoInterface,this.http,'aries');
  }

  atualizarEquacaoLatex() {
    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(this.grafoInterface, 1);
    let objetoEquacoesDoGrafo:any =  ConfiguradorDeLatex.construirFormalismoGrafo(GrafoTeorico)
    this.vertices = objetoEquacoesDoGrafo.vertices;
    this.arestas = objetoEquacoesDoGrafo.arestas;
  }

  clicouDimensionar() {

    this.grafoMaster.possivelCriarNo = 0;
  }

  clicouGerar() {

    this.grafoMaster.possivelCriarNo = 1;
  }

  clicouLimpar(){
    this.grafoInterface.destroy();
    this.grafoInterface = this.grafoMaster.gerarGrafo("cyExplorar2");
    this.grafoMaster.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, "explorar-constelacoes-1");
    this.atualizarEquacaoLatex();
    this.grafoMaster.contagem=0;
  }


  startNextPage(){
    this.navCtrl.push("ExplorarConstelacoes_2Page");
  }
}
