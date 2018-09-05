import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrafoGeralProvider } from '../../providers/grafo-geral/grafo-geral';
import * as cytoscape from './../../assets/cytoscape'
import { ConfiguracoesDeCriacao } from '../../model/configuracoesDeCriacao';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})




export class HomePage {


  isSelecionadoBotao:any;
  configuracoesDeCriacao:ConfiguracoesDeCriacao;

  constructor(public navCtrl: NavController, public grafoGeralProvider:GrafoGeralProvider) {}
  ionViewDidLoad() {
    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    let grafoInterface:any = this.grafoGeralProvider.gerarGrafo(this.configuracoesDeCriacao);
    this.grafoGeralProvider.adicionarEventosAreaDeDesenhoGrafoGeral(grafoInterface,this.configuracoesDeCriacao);
  }

  clicouDimensionar(){

    this.configuracoesDeCriacao.possivelCriarNo=0;
  }

  clicouGerar(){

    this.configuracoesDeCriacao.possivelCriarNo=1;
  }


}
