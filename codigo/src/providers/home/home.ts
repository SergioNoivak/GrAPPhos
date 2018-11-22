import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstrutorDeGrafoTeorico } from '../../model/ConstrutorDeGrafoTeorico';
import * as $ from "../../assets/jquery.min.js";
import { AlgoritmosClassicos } from '../../model/AlgoritmosClassicos';
import { AlgoritmsDeInterface } from '../../model/AlgoritmosDeInterface';
import { ManipuladorSaidaDeAlgoritmos } from '../../model/ManipuladorSaidaDeAlgoritmos';


/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HomeProvider Provider');
  }



  executarBFS(cy, naoDir,noInicio,rapidezDaAnimacao){



    AlgoritmsDeInterface.desanimarDescobertas(cy)

    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(cy, naoDir);
    console.log(GrafoTeorico);

    GrafoTeorico.noInicio =noInicio;


    $.each(GrafoTeorico.vetor, function(key, value) {
     
      if(!GrafoTeorico.vetor[key].descoberto){

        console.log("NO INICIO: "+GrafoTeorico.noInicio)
        AlgoritmosClassicos.BFS_Visit(GrafoTeorico);
        AlgoritmsDeInterface.animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao)
        
        GrafoTeorico.noInicio =key;

      }

      if(!GrafoTeorico.vetor[GrafoTeorico.noInicio].descoberto){
         AlgoritmosClassicos.DFS_Visit(GrafoTeorico);
        
         AlgoritmsDeInterface.animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao)
      }
    });




    console.log(GrafoTeorico);


  }
  
  executarDFS(cy, naoDir,noInicio,rapidezDaAnimacao){



    AlgoritmsDeInterface.desanimarDescobertas(cy)

    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(cy, naoDir);
    console.log(GrafoTeorico);

    GrafoTeorico.noInicio =noInicio;


    $.each(GrafoTeorico.vetor, function(key, value) {
     
      if(!GrafoTeorico.vetor[key].descoberto){

        console.log("NO INICIO: "+GrafoTeorico.noInicio)
        AlgoritmosClassicos.DFS_Visit(GrafoTeorico);
        AlgoritmsDeInterface.animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao)
        
        GrafoTeorico.noInicio =key;

      }

      if(!GrafoTeorico.vetor[GrafoTeorico.noInicio].descoberto){
         AlgoritmosClassicos.DFS_Visit(GrafoTeorico);
        
         AlgoritmsDeInterface.animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao)
      }
    });




    console.log(GrafoTeorico);


  }

  executarDFSVisit(cy, naoDir,noInicio,rapidezDaAnimacao){

    AlgoritmsDeInterface.desanimarDescobertas(cy)

    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(cy, naoDir);
    console.log(GrafoTeorico);
    GrafoTeorico.noInicio =noInicio;
    AlgoritmosClassicos.DFS_Visit(GrafoTeorico);
    console.log(GrafoTeorico);
     AlgoritmsDeInterface.animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao)

  }


}
