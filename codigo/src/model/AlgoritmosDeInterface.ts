

import * as $ from "../assets/jquery.min.js";

export class AlgoritmsDeInterface{

    static presentLoadingDefault(loadingCtrl) {
        let loading = loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
      
       
      }
    
      static desanimarNos_e_Arestas(cy){


        cy.nodes().forEach(node=>{
            node.removeStyle();
            node.style({
                'background-opacity': 0.5,
                'border-width': 2,
                'border-color': 'white',
                "text-valign": "center",
                "text-halign": "center",
                "color": "#ffffff"

            
            });


            
                    
        })


        cy.edges().forEach(edge=>{


            edge.removeStyle();
            edge.style({
                "line-color": "#ccffff",
                "opacity": 1            
            });

        })



      }

      static desanimarDescobertas(cy){


        cy.nodes().forEach(node=>{
            node.removeStyle();
            node.style({
                'background-opacity': 0.5,
                'border-width': 2,
                'border-color': 'white',
                "text-valign": "center",
                "text-halign": "center",
                "color": "#ffffff"
            });
        })
      }

    static animarDescobertas(cy,GrafoTeorico,rapidezDaAnimacao){


        let vetor = [];
        vetor.push([GrafoTeorico.noInicio,0]);
        $.each(GrafoTeorico.vetor, function(index, value) {
            
            var nome = GrafoTeorico.vetor[index].nome;
            var d = GrafoTeorico.vetor[index].d;
            if(GrafoTeorico.vetor[index].descoberto) 
                vetor.push([nome,d]);
        });


        console.log(vetor)
        vetor.sort((a, b) => {
 
            return  a[1] - b[1];
        });

   


        console.log("VETOR: "+vetor);
        
        
        let fator = 0;
        vetor.forEach((valor,indice) => {
            
            console.log("Descoberta (fator: "+fator+", valor[0]: "+valor[0]+", valor[1]: "+valor[1] )
        cy.nodes("[label="+valor[0]+"]").animate({
           
        duration: 1
        
            }).delay(fator==0? 0:  +(10000/rapidezDaAnimacao)*fator).animate({
                style: {
                    'background-opacity': 0.5,
                    'border-color': 'white',
                    "background-color": "#ff0000"            },
                duration: 1
            });
            
             fator++;   
        });
        

 
    }






    static animarDescobertasArestas_e_nos(cy,GrafoTeorico,rapidezDaAnimacao){


        let vetor = [];
        vetor.push([GrafoTeorico.noInicio,0]);
        $.each(GrafoTeorico.vetor, function(index, value) {
            
            var nome = GrafoTeorico.vetor[index].nome;
            var d = GrafoTeorico.vetor[index].d;
            if(GrafoTeorico.vetor[index].descoberto) 
                vetor.push([nome,d]);
        });


        console.log(vetor)
        vetor.sort((a, b) => {
 
            return  a[1] - b[1];
        });

   


        console.log("VETOR: "+vetor);
        
        
        let fator = 0;
        let noAnterior = undefined;


        vetor.forEach((valor,indice) => {
            
            console.log("Descoberta (fator: "+fator+", valor[0]: "+valor[0]+", valor[1]: "+valor[1] )
        
        let noAnimado =  cy.nodes("[label="+valor[0]+"]");
        noAnimado.animate({
           
        duration: 1
        
            }).delay(fator==0? 0:  +(10000/rapidezDaAnimacao)*fator).animate({
                style: {
                    'background-opacity': 0.5,
                    'border-color': 'white',
                    "background-color": "#ff0000"            },
                duration: 1
            });

            if(noAnterior!=undefined){


                
                noAnimado.edgesTo(cy.nodes("[label="+GrafoTeorico.vetor[valor[0]].pi+"]")).animate({
           
                    duration: 1
                        }).delay(fator==0? 0:  +(10000/rapidezDaAnimacao)*fator).animate({
                            style: {
                                "line-color": "#ff0000",
                                "opacity": 1

                            },
                            duration: 1
                        });
                        
                        cy.nodes("[label="+GrafoTeorico.vetor[valor[0]].pi+"]").edgesTo(noAnimado).animate({
           
                            duration: 1
                                }).delay(fator==0? 0:  +(10000/rapidezDaAnimacao)*fator).animate({
                                    style: {
                                        "line-color": "#ff0000",
                                        "opacity": 1
        
                                    },
                                    duration: 1
                                });
        
            }

            noAnterior = noAnimado;
             fator++;   
        });
        

 
    }











}
