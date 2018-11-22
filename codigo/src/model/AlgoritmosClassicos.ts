

import * as $ from "../assets/jquery.min.js";
import { ManipuladorSaidaDeAlgoritmos } from './ManipuladorSaidaDeAlgoritmos';
import { AlgoritmsDeInterface } from './AlgoritmosDeInterface';


export class AlgoritmosClassicos{






  static _inicialize_single_source(GrafoTeorico)
  {
     $.each(GrafoTeorico.vetor, function(index, value) {
         
         value.d =Number.MAX_VALUE;
         value.pi = undefined;
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
static BFS_Visit(GrafoTeorico){

    this._inicialize_single_source(GrafoTeorico);
    let contadorDescobertas =0;
    let piCorrente = undefined;
    let queue =[];
    let descoberto ={};

    $.each(GrafoTeorico.vetor, function(key, value) {
    
        descoberto[parseInt(key)]=false;
    
    });


    queue.push(GrafoTeorico.noInicio);

    
    while(queue.length!=0){
            console.log('stack'+queue)
        let v = queue.shift();
        contadorDescobertas++;
        GrafoTeorico.vetor[v].d = contadorDescobertas;
        

        if(!descoberto[v]){
            GrafoTeorico.vetor[v].descoberto = true;
            descoberto[v] =true;

            $.each(GrafoTeorico.vetor[v].Adj, (inicio)=>{
                
                if(!descoberto[inicio]){
                queue.push(parseInt(inicio))
                GrafoTeorico.vetor[inicio].pi =v;
            }
        });   
    }
        
    }




}









 static extract_min(queue){
    queue= queue.sort((ele1,ele2)=>{return ele1.d==ele2.d? 0:(ele1.d<ele2.d? -1:+1);});
    var min = queue[0];
    queue.splice(0,1);
    return min;
}


static fill_queue(GrafoTeorico){
        
    var queue = [];
    $.each(GrafoTeorico.vetor, function(index, value) {
        queue.push(value);
    });


    return queue.sort((ele1,ele2)=>{return ele1.d==ele2.d? 0:(ele1.d<ele2.d? -1:+1);});

}

 static Dijkstra(GrafoTeorico){

    this._inicialize_single_source(GrafoTeorico);
    var queue = this.fill_queue(GrafoTeorico);
    console.log("queueeeeeeeee " + JSON.stringify(  queue)); 
    GrafoTeorico.vetor[GrafoTeorico.noInicio].descoberto = true;

    while(queue.length>0){
        var u = this.extract_min(queue);

    $.each(u.Adj, function(fim, aresta) {

        if(GrafoTeorico.vetor[fim].d> GrafoTeorico.vetor[parseInt( u.nome)].d +aresta.peso){
            GrafoTeorico.vetor[fim].d =GrafoTeorico.vetor[parseInt( u.nome)].d +aresta.peso;
            GrafoTeorico.vetor[fim].pi = parseInt( u.nome);
            GrafoTeorico.vetor[fim].descoberto = true;
            
        }

    
    });

    
    
}



console.log(GrafoTeorico);
}







  }