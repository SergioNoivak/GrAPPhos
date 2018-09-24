


export class BuscadorDeJSON{



    static construirGrafoDeJSON(grafoInterface:any,http:any,constelacao:string){
            http.get("../assets/json/constelacoes/"+constelacao+".json").subscribe(dadosInternosAoJSON => {
                grafoInterface.json(dadosInternosAoJSON);            
            });}
    }