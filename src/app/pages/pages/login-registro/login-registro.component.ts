import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.scss']
})
export class LoginRegistroComponent implements OnInit {
  formularioLogin!: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    
    let formulario = {
      email: ['', Validators.compose([
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
        Validators.required
      ])]
    }
    this.formularioLogin = this.formBuilder.group(formulario);

  }
  iniciarSesion() {
    this.submitted=true
   
    if(this.formularioLogin.invalid){
      return
    }else{
      alert("Bienvenido!!")
    }

    if (this.formularioLogin.status === 'VALID') {
      this.router.navigate(['MiPerfil'])
    }
  }

  login(): void {
    this.authService
      .login(this.formularioLogin.value.email, this.formularioLogin.value.password)
      .subscribe();
  }

}

