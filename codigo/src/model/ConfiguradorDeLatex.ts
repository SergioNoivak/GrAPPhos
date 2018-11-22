export class ConfiguradorDeLatex {

    static construirFormalismoGrafo(GrafoTeorico:any):Object{

        let vertices:string = ' \\{ ';
        let arestas: string = ' \\{ ';
    
    
        for (const key in GrafoTeorico.vetor) {
          if (GrafoTeorico.vetor.hasOwnProperty(key)) {
            const no = GrafoTeorico.vetor[key];
            vertices = vertices.concat(no.nome + ',');
    
            for (const chave in no.Adj) {    
              arestas = arestas.concat('('+no.nome);
              arestas = arestas.concat(','+ chave + ')'+',');
            }
    
          }
        }

        vertices = vertices.substr(0, vertices.length - 1);
        arestas = arestas.substr(0, arestas.length - 1);
    
        vertices = vertices.concat('\\}');
        arestas = arestas.concat('\\}');
    


        return {vertices,arestas};

    }


    





    
}