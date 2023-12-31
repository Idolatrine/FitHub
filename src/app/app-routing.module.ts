import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { VistaEjerciciosComponent } from './pages/vista-ejercicios/vista-ejercicios.component';
import { VistaRutinasComponent } from './pages/vista-rutinas/vista-rutinas.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';
import { LoginRegistroComponent } from './pages/login-registro/login-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MisEjerciciosComponent } from './pages/mis-ejercicios/mis-ejercicios.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'Ejercicios',component:VistaEjerciciosComponent},
  {path:'Rutinas',component:VistaRutinasComponent},
  {path:'MiPerfil',component:MiPerfilComponent},
  {path:'Ejercicio/:id',component:EjercicioComponent},
  {path:'Login',component:LoginRegistroComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'MisEjercicios/:id', component:MisEjerciciosComponent},
  {path:'Maquinas',component:MaquinasComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload'
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
