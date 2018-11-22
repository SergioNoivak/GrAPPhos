
import * as $ from "../assets/jquery.min.js";

export class ManipuladorSaidaDeAlgoritmos{

   static ordenarMomentoDeDescobertaDFS(GrafoTeorico,noInicio){


        let vetor = [];
        $.each(GrafoTeorico.vetor, function(index, value) {
                vetor.push([GrafoTeorico.vetor[index].nome,GrafoTeorico.vetor[index].d])
        });


        vetor.sort((a, b) => {
 
            return  a[2] - b[2];
        });
        return vetor;
    }



}