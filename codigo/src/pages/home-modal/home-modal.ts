import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HomeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-modal',
  templateUrl: 'home-modal.html',
})
export class HomeModalPage {

  rapidezDaAnimacao:number = 20;
  algoritmoAtual:string ;
  noInicial:number =1 ;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
      this.algoritmoAtual = this.navParams.get('algoritmoAtual');  

  }

  ionViewDidLoad() {


    this.algoritmoAtual = this.navParams.get('algoritmoAtual');
    this.noInicial = this.navParams.get('noInicial');
    this.rapidezDaAnimacao = this.navParams.get('rapidezDaAnimacao');

    console.log('ionViewDidLoad HomeModalPage');
  }




  fecharModal(){
    this.viewCtrl.dismiss({noInicial:this.noInicial,algoritmoAtual:this.algoritmoAtual,rapidezDaAnimacao:this.rapidezDaAnimacao});

  }

}
