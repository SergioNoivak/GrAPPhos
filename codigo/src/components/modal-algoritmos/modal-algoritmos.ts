import { Component } from '@angular/core';

/**
 * Generated class for the ModalAlgoritmosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-algoritmos',
  templateUrl: 'modal-algoritmos.html'
})
export class ModalAlgoritmosComponent {

  text: string;

  constructor() {
    console.log('Hello ModalAlgoritmosComponent Component');
    this.text = 'Hello World';
  }

}
