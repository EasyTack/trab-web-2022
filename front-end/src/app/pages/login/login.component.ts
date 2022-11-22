import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario.model'
import { UsuarioService } from 'src/app/service/usuario.service'

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
    private usuarioService: UsuarioService
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
    this.usuarioService.login(usuario, senha).subscribe((usr: Usuario) => {
      console.log(usr)
      this.buscandoUsuario = false
    })

    //this.formLogin.reset()
  }

  submitFormRecoverPassword(){
    let usuario = new Usuario()
    usuario.usuario = this.formLogin.controls['usuario'].value

    this.usuarioService.recuperarSenha(usuario)

    //this.formLogin.reset()
  }

  recoverPassword(){
    this.recover_password = true
  }
}
