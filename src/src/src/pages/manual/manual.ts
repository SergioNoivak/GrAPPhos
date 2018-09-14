import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as PIXI  from '../../assets/pixi';


/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})


export class ManualPage {
  @ViewChild('pixistart') 
  pixiContainer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    console.log("Componente");
    PIXI.utils.sayHello(type);

    let app = new PIXI.Application({width: 256, height: 256, view: this.pixiContainer.nativeElement,
      antialias: false,
      transparent: false,
      resolution: 1,
    });
    app.renderer.backgroundColor = 0x061639;

    app.renderer.autoResize = true;

    var textura = PIXI.Texture.fromImage('../../assets/imgs/bunny.png')

    // center the sprite's anchor point
    
    // move the sprite to the center of the screen

    var container = new PIXI.Container();

    app.stage.addChild(container);
    
    // Listen for animate update

    // Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
  var bunny = new PIXI.Sprite(textura);
  bunny.anchor.set(0.5);
  bunny.x = (i % 5) * 40;
  bunny.y = Math.floor(i / 5) * 40;
  container.addChild(bunny);
}


container.x = app.screen.width / 2;
container.y = app.screen.height / 2;


container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;


console.log(container);

app.ticker.add(function(delta) {
  // rotate the container!
  // use delta to create frame-independent transform
  container.rotation += 0.01 * delta;
});


  }


}
