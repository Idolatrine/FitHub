import { Injectable } from '@angular/core';
import { VistaMaquinas } from './vista-maquinas.type';


@Injectable({
  providedIn: 'root'
})
export class MaquinasPublicasService {
  arregloRutinas:VistaMaquinas[] = new Array(3);
  constructor() {
    this.generarNumeros()
  }
  generarNumeros(){
    for (let i = 0; i < 3; i++) {
      this.arregloRutinas[i] = {tituloRutina:"Rutina " + (i+1)};
    }
  }
}
