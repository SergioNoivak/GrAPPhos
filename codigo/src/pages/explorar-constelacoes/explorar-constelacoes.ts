import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';
import {ConstrutorDeGrafoTeorico} from '../../model/ConstrutorDeGrafoTeorico';
import { ConfiguradorDeLatex } from '../../model/ConfiguradorDeLatex'
import { HttpClient } from '@angular/common/http';



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
  grafoInterface: any;
  configuradorDeAreaDeDesenho: ConfiguradorDeAreaDeDesenho;
  test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: HttpClient) {
    this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();
    // let test =  JSON.parse('../../assets/json/constelacoes/test.json');
    // this.http.post('../../assets/json/constelacoes/',this.grafoInterface.json(),httpOptions);
  }

  ionViewDidLoad() {
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo("cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, "explorar-constelacoes-1");
  }

  atualizarEquacaoLatex() {
    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(this.grafoInterface, 1);
    let objetoEquacoesDoGrafo:any =  ConfiguradorDeLatex.construirFormalismoGrafo(GrafoTeorico)
    this.vertices = objetoEquacoesDoGrafo.vertices;
    this.arestas = objetoEquacoesDoGrafo.arestas;
  }

  clicouDimensionar() {
    this.configuradorDeAreaDeDesenho.possivelCriarNo = 0;
  }

  clicouGerar() {
    this.configuradorDeAreaDeDesenho.possivelCriarNo = 1;
  }

  clicouLimpar(){
    this.grafoInterface.destroy();
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo("cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, "explorar-constelacoes-1");
    this.atualizarEquacaoLatex();
    this.configuradorDeAreaDeDesenho.contagem=0;
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
