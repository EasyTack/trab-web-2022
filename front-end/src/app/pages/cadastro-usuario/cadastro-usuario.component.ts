import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  hide_senha = true;
  hide_confirmarSenha = true;

  formCadastro: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.formCadastro = this.createForm(this.fb)
  }

  ngOnInit(): void {
    //this.carregandoLista = true
    this.route.queryParams.subscribe(params => {
      let id = params['id']

      if(id){
        this.usuarioService.getId(id).subscribe((usr: Usuario) => {
          this.formCadastro.controls['usuario'].setValue(usr.usuario)
          this.formCadastro.controls['cpf'].setValue(usr.cpf)
          this.formCadastro.controls['nome'].setValue(usr.nome)
          this.formCadastro.controls['sobrenome'].setValue(usr.sobrenome)
          //this.carregandoLista = false
        })
      }
    })
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.required
      ])],
      nome: ['', Validators.compose([
        Validators.required
      ])],
      sobrenome: ['', Validators.compose([
        Validators.required
      ])],
      cpf: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  submitForm(){
    let usuario = new Usuario
    usuario.nome = this.formCadastro.controls['nome'].value
    usuario.sobrenome = this.formCadastro.controls['sobrenome'].value
    usuario.cpf = this.formCadastro.controls['cpf'].value
    usuario.usuario = this.formCadastro.controls['usuario'].value
    usuario.senha = this.formCadastro.controls['senha'].value
    let confirmarSenha = this.formCadastro.controls['confirmarSenha'].value

    if(usuario.usuario && usuario.nome && usuario.sobrenome && usuario.senha && usuario.senha && confirmarSenha && usuario.cpf){
      this.usuarioService.salvar(usuario)
    }

    //this.formCadastro.reset()
  }
}
