
import { ConfiguradorDeAreaDeDesenho } from '../../model/configuradorDeAreaDeDesenho';
import { NavController, IonicPage, Alert, AlertController, MenuController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { Component } from '@angular/core';
import { HomeModalPage } from '../home-modal/home-modal';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  rapidezDaAnimacao:number = 20;
  algoritmoAtual:string = 'dijkstra';
  noInicial:number = 1;
  variavel:any;
  alert:Alert;
  classicos:any;
  place:string = "";
  grafoInterface:any
  grafoMaster:ConfiguradorDeAreaDeDesenho;

  constructor(public navCtrl: NavController,public homeProvider:HomeProvider,public alertCtrl : AlertController,public modalCtrl:ModalController,public loadingCtrl:LoadingController) {
    this.grafoMaster = new ConfiguradorDeAreaDeDesenho();
    
  }
  ionViewDidLoad()
  {
    this.grafoInterface= this.grafoMaster.gerarGrafo("cy");
    this.grafoMaster.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface);
  }

  clicouDimensionar(){
    this.grafoMaster.possivelCriarNo=0;
    console.log(this.grafoInterface.elements().jsons())
  }

  clicouGerar(){
    this.grafoMaster.possivelCriarNo=1;
  }

  executarAlgoritmo(){
    console.log(this.place);
  }

  optionsFn(item){
    console.log(item);
  }

  getAlgoritmo(){

      switch(this.algoritmoAtual){


          case 'dijkstra':

          this.homeProvider.executarDijikstra(this.grafoInterface,true,this.noInicial,this.rapidezDaAnimacao);

          break;


        case 'DFS-Visit':
          this.homeProvider.executarDFSVisit(this.grafoInterface,true,this.noInicial,this.rapidezDaAnimacao);
          
          break;
          
          case 'DFS':
          this.homeProvider.executarDFS(this.grafoInterface,true,this.noInicial,this.rapidezDaAnimacao);
          break;
          
          
          case 'BFS':
          
          this.homeProvider.executarBFS(this.grafoInterface,true,this.noInicial,this.rapidezDaAnimacao);
        break;




       }



 
 

  }

  criarModalAlgoritmos() {

    
    let modalAlgoritmos = this.modalCtrl.create(HomeModalPage,{noInicial:this.noInicial,algoritmoAtual:this.algoritmoAtual,rapidezDaAnimacao:this.rapidezDaAnimacao});
    modalAlgoritmos.present();

    modalAlgoritmos.onDidDismiss(dados => {  
      this.noInicial=dados.noInicial;
      this.algoritmoAtual = dados.algoritmoAtual;
      this.rapidezDaAnimacao=dados.rapidezDaAnimacao;
      });
  }

  public resetarTela(){
      this.grafoInterface.destroy();
      this.grafoMaster = new ConfiguradorDeAreaDeDesenho();
      this.grafoInterface= this.grafoMaster.gerarGrafo("cy");
      this.grafoMaster.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface);
  

  }
  

}


