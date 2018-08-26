import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as cytoscape from './../../assets/cytoscape'
import { GrafoGeralProvider } from '../../providers/grafo-geral/grafo-geral';

var contagem:number = 0;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public grafoGeralProvider:GrafoGeralProvider) {

  }
  ionViewDidLoad() {

    var cy:any = this.grafoGeralProvider.gerarGrafo();
    this.grafoGeralProvider.adicionarNo(cy,contagem);
  
}
}