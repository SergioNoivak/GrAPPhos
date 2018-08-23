import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as code from './../../assets/code'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {

    iniciar_grafo();

  }
}
