import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precoGasolina: number = 0;
  distancia: number = 0;
  consumo: number = 0;
  total: number = 0;
  constructor() {}

  calcularTotal() {
    let valorGas = this.precoGasolina / this.consumo;
    this.total = valorGas * this.distancia;
  }
}
