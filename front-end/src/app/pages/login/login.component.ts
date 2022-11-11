import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/Usuario'
import { UsuarioService } from 'src/app/service/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide_senha = true
  recover_password = false
  waitingData = false

  formLogin: FormGroup

  constructor(private fb: FormBuilder) {
    this.formLogin = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  submitForm(){
    let usuario = new Usuario()
    usuario.usuario = this.formLogin.controls['usuario'].value
    usuario.senha = this.formLogin.controls['senha'].value

    const result = new UsuarioService().login(usuario)

    if(usuario.usuario != '' && usuario.senha != ''){
      this.waitingData = true
      setTimeout(()=>{
        this.waitingData = false
        this.formLogin.controls['usuario'].setErrors({userIncorrect: true})
        this.formLogin.controls['senha'].setErrors({passwordIncorrect: true})
      },5000)
    }

    //this.formLogin.reset()
  }

  submitFormRecoverPassword(){
    let usuario = new Usuario()
    usuario.usuario = this.formLogin.controls['usuario'].value

    new UsuarioService().recuperarSenha(usuario)

    //this.formLogin.reset()
  }

  recoverPassword(){
    this.recover_password = true
  }
}
