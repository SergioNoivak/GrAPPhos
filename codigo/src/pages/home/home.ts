
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

 public noDeApagar:number = 1;
 public no1DeApagar:number = 1;
 public no2DeApagar:number = 1;
  rapidezDaAnimacao:number = 20;
  algoritmoAtual:string = 'dijkstra';
  noInicial:number = 1;
  variavel:any;
  alert:Alert;
  classicos:any;
  place:string = "";
  grafoInterface:any
  configuradorDeAreaDeDesenho:ConfiguradorDeAreaDeDesenho;

  constructor(public navCtrl: NavController,public homeProvider:HomeProvider,public alertCtrl : AlertController,public modalCtrl:ModalController,public loadingCtrl:LoadingController) {
    this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();
 
    


  }
  NoDeApagar(){


      this.noDeApagar =  +this.grafoInterface.ultimoNoClicado.data('label');



      
  }

  NoDeApagar1(){
    this.no1DeApagar =  +this.grafoInterface.ultimoNoClicado.data('label');


  }

  NoDeApagar2(){

    this.no2DeApagar =  +this.grafoInterface.ultimoNoClicado.data('label');


  }
  ionViewDidLoad()
  {
    this.grafoInterface= this.configuradorDeAreaDeDesenho.gerarGrafo("cy");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface);

    
  
  }
  ionViewDidEnter	(){



  }


  clickAtualizar(){


    console.log("evnt ")


  }

  clicouDimensionar(){
    this.configuradorDeAreaDeDesenho.possivelCriarNo=0;
    console.log(this.grafoInterface.elements().jsons())
  }

  clicouGerar(){
    this.configuradorDeAreaDeDesenho.possivelCriarNo=1;
  }

  executarAlgoritmo(){
    console.log(this.place);
  }

  optionsFn(item){
    console.log(item);
  }
  habilitarDeletar(){



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
      this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();
      this.grafoInterface= this.configuradorDeAreaDeDesenho.gerarGrafo("cy");
      this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface);
  

  }

  deletarNo(){
        let no =  this.grafoInterface.nodes('[label='+this.noDeApagar+']')
        if(no.nonempty())
        this.grafoInterface.remove(no);
  }

  deletarAresta(){


    let no1 =  this.grafoInterface.nodes('[label='+this.no1DeApagar+']');
    let no2 =  this.grafoInterface.nodes('[label='+this.no2DeApagar+']');
    let arestas1 = no1.edgesTo(no2)
    let arestas2 = no2.edgesTo(no1)


    if(arestas1.nonempty())
    this.grafoInterface.remove(arestas1);
    if(arestas2.nonempty())
    this.grafoInterface.remove(arestas2);



  }
  

}


