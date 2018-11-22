

import * as $ from "../assets/jquery.min.js";
import { ManipuladorSaidaDeAlgoritmos } from './ManipuladorSaidaDeAlgoritmos';
import { AlgoritmsDeInterface } from './AlgoritmosDeInterface';


export class AlgoritmosClassicos{
   static inicialize_single_source(GrafoTeorico,noInicio)
    {
  
        $.each(GrafoTeorico.vetor, function(index, value) {
              
        value.pi = undefined;
        value.nome==noInicio? value.d = 0 : value.d = undefined ;
  
    });
  }





  static _inicialize_single_source(GrafoTeorico)
  {
     $.each(GrafoTeorico.vetor, function(index, value) {
         
         value.d =Number.MAX_VALUE;
         value.pi = undefined;
         GrafoTeorico.vetor[index].descoberto = false;
     });

     GrafoTeorico.vetor[parseInt(GrafoTeorico.noInicio)].d = 0;

}




  static DFS_Visit(GrafoTeorico){

    this._inicialize_single_source(GrafoTeorico);
    let contadorDescobertas =0;
    let piCorrente = undefined;
    let stack =[];
    let descoberto ={};

    $.each(GrafoTeorico.vetor, function(key, value) {
    
        descoberto[parseInt(key)]=false;
    
    });


    stack.push(GrafoTeorico.noInicio);

    
    while(stack.length!=0){
            console.log('stack'+stack)
        let v = stack[stack.length-1];
        stack.splice(stack.length-1,1);
        contadorDescobertas++;
        GrafoTeorico.vetor[v].d = contadorDescobertas;
        

        if(!descoberto[v]){
            GrafoTeorico.vetor[v].descoberto = true;
            descoberto[v] =true;

            $.each(GrafoTeorico.vetor[v].Adj, (inicio)=>{
                
                if(!descoberto[inicio]){
                stack.push(parseInt(inicio))
                GrafoTeorico.vetor[inicio].pi =v;
            }
        });   
    }
        
    }

}







}