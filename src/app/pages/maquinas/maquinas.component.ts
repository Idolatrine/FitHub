import { Component, OnInit } from '@angular/core';
import {VistaRutinas} from '../../services/vistaRutinas/rutinas-publicas.type';
import {RutinasPublicasService} from '../../services/vistaRutinas/rutinas-publicas.service';

@Component({
  selector: 'app-vista-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.scss']
})
export class MaquinasComponent implements OnInit {

  arrayRutinas:VistaRutinas[] = []
  constructor(private arrayRutinasAux:RutinasPublicasService) { 
  }
  ngOnInit(): void {
    this.arrayRutinas = this.arrayRutinasAux.arregloRutinas;
  }

}
