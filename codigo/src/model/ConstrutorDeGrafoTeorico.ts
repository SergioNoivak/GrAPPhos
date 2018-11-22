export class ConstrutorDeGrafoTeorico {

  public construirGrafoTeorico(cy, naoDir) {
    var GrafoTeorico = {
      vetor: {},
      noInicio: undefined
    }

    cy.nodes().map(noDaTela => {

      var noTeorico = {
        Adj: {},
        nome: -1,
        descoberto:false
      }

      var nomeNo = noDaTela.data('label');
      noTeorico.nome = parseInt(nomeNo);


      GrafoTeorico.vetor[parseInt(nomeNo)] = noTeorico;
    });


    cy.edges().map(arestaDaTela => {
      var arestaTeorica = {
        peso: -1,
      }
      var valorSourceDaTela = parseInt(arestaDaTela.source().data('label'));
      var valorTargetDaTela = parseInt(arestaDaTela.target().data('label'));
      var valorPeso = parseFloat(arestaDaTela.data('label'));


      arestaTeorica.peso = valorPeso;

      GrafoTeorico.vetor[valorSourceDaTela].Adj[valorTargetDaTela] = arestaTeorica;
      if (naoDir) {
        arestaTeorica.peso = valorPeso;
        GrafoTeorico.vetor[valorTargetDaTela].Adj[valorSourceDaTela] = arestaTeorica;
      }



    })



    return GrafoTeorico;

  }




}
