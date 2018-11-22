import { ConfiguracoesDeCriacao } from './configuracoesDeCriacao';



export class PintorGeral extends ConfiguracoesDeCriacao {

    getRandomColor() {
        var letters: string = '0123456789ABCDEF';
        var color: string = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    pintarNo(cy:any, evt:any, configuracaoDeEstilo?:any) {

        var no:any;
        var config:any = {
            id: 1,
            group: "nodes",
            data: { weight: 10, label: this.contagem },
            position: { x: evt.position.x, y: evt.position.y },
        }
        
        if (!configuracaoDeEstilo) {
            config.style = {
                'background-opacity': 0,
                'border-width': 2,
                'border-color': 'white',
                "text-valign": "center",
                "text-halign": "center",
                "color": "#ffffff"
            }

        } else {
            switch (configuracaoDeEstilo) {
                case "explorar-constelacoes-1":{
                    config.style = {
                        'background-image': '../assets/imgs/star_blue.png',
                        'background-fit': 'cover',
                        'background-opacity': 0,
                        "text-valign": "center",
                        "text-halign": "center",
                        "color": "#ffffff"
                    }               
                }break;
                
                case "redes-sociais":{
                    config.style = {
                        "text-valign": "center",
                        "text-halign": "center",
                        'background-image': '../assets/imgs/rs/user.png',
                        'background-fit': 'cover'  
                    }
                }break;
            }
        }
        
        no = cy.add(config);
        return no
    }

    pintarAresta(cy: any, no: any) {

        if (this.noAnterior != no) {
            var aresta1 = cy.add({
                data:
                {
                    label: '1',
                    source: this.noAnterior.id(),
                    target: no.id(),
                    directed: true,
                    style: {
                        'line-color': '#FFF'
                    }
                }
            });


            var aresta2 = cy.add({
                data:
                {
                    label: '1',
                    source:no.id(),
                    target:  this.noAnterior.id(),
                    directed: true,
                    style: {
                        'line-color': '#FFF'
                    }
                }
            });
        }
        
        aresta1.style('line-color', '#ccffff');
        aresta1.style('opacity', '0.5');

        aresta2.style('line-color', '#ccffff');
        aresta2.style('opacity', '0.5');
        return aresta1;
    }

    constructor() {
        super();
    }
}