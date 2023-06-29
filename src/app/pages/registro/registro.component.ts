import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    formularioRegistro!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private AuthService: AuthService) {
  }

  ngOnInit(): void {
    let formulario = {
      name: ['', Validators.compose([
          Validators.required
      ])],
      username: ['', Validators.compose([
          Validators.required
      ])],
      age: ['', Validators.compose([
          Validators.pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/),
          Validators.required
      ])],
      email: ['', Validators.compose([
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          Validators.required
      ])],
      password: ['', Validators.compose([
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
          Validators.required
      ])]
    }
    this.formularioRegistro = this.formBuilder.group(formulario);

  }
  registrarse(){
    console.log(this.formularioRegistro.status);
    if (this.formularioRegistro.status === 'VALID') {
      this.router.navigate(['Login'])
    }
  }

  signup(): void {
    this.AuthService.signup(this.formularioRegistro.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["Login"]);
    });
  }
}
