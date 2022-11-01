import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide_senha = true;

  login: Login = {usuario:'', senha:''}
  formLogin: FormGroup

  constructor() {
    this.formLogin = this.createForm(this.login)
  }

  ngOnInit(): void {
  }

  createForm(login: Login){
    return new FormGroup({
      usuario: new FormControl(login.usuario),
      senha: new FormControl(login.senha)
    })
  }

  submitForm(){
    console.log(this.formLogin.value)
  }
}
