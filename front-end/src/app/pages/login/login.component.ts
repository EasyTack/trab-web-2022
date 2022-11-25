import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Auth } from 'src/app/interfaces/auth'
import { Usuario } from 'src/app/model/usuario.model'
import { AuthService } from 'src/app/service/auth.service'
import { Security } from 'src/app/utils/security.util.ts'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide_senha = true
  recover_password = false
  buscandoUsuario = false

  formLogin: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
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
    const usuario = this.formLogin.controls['usuario'].value
    const senha = this.formLogin.controls['senha'].value

    this.buscandoUsuario = true
    this.authService.login(usuario, senha)
      .subscribe(((data: Auth) => {
        Security.set(data.usuario, data.token.toString())
        this.buscandoUsuario = false
      }), (err) => {
        this.buscandoUsuario = false
      })
  }

  submitFormRecoverPassword(){
    let usuario = new Usuario()
    usuario.usuario = this.formLogin.controls['usuario'].value

    this.authService.recuperarSenha(usuario)

    //this.formLogin.reset()
  }

  recoverPassword(){
    this.recover_password = true
  }
}
