import { Injectable } from '@angular/core';
import {VistaEjercicios} from './vista-ejercicios.type';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VistaEjerciciosService {
  url:string = '../../../assets/datos/ejercicios.json';
  constructor(private httpClient:HttpClient) {
  }

    
  ngOnInit(): void {
  }

  devolverEjercicios(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  encontrarRutina(id:string | any, rutinas:VistaEjercicios[]){
    return rutinas.find(rutinas => rutinas.id === id);
  }
}
