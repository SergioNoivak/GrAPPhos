


import * as cytoscape from './../assets/cytoscape'


export class ArquitetoDeGrafoTeorico{

 public construirGrafoTeorico(cy,naoDir) {

        var GrafoTeorico = {
        vetor: {},
        }
    
    
    
    
        cy.nodes().map(noDaTela => {
    
            var noTeorico = {
                Adj: {},
                nome: -1
            }
    
            var nomeNo = noDaTela.data('label');
            noTeorico.nome = parseInt(nomeNo);
            GrafoTeorico.vetor[parseInt(nomeNo)] = noTeorico;
        });
    
    
        cy.edges().map(arestaDaTela => {
            var arestaTeorica = {
                noFim: -1,
                peso: -1,
            }
            var valorSourceDaTela = parseInt(arestaDaTela.source().data('label'));
            var valorTargetDaTela = parseInt(arestaDaTela.target().data('label'));
            var valorPeso = parseFloat(arestaDaTela.data('label'));
    
    
            arestaTeorica.noFim = valorTargetDaTela;
            arestaTeorica.peso = valorPeso;
    
            GrafoTeorico.vetor[valorSourceDaTela].Adj[valorTargetDaTela] = arestaTeorica;
            if(naoDir){
                arestaTeorica.noFim = valorSourceDaTela;
                arestaTeorica.peso = valorPeso;
                GrafoTeorico.vetor[valorTargetDaTela].Adj[valorSourceDaTela] = arestaTeorica;
            }
                
        
        
        })
    
    
    
        return GrafoTeorico;
    
    }
    



}