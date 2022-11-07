import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  hide_senha = true;
  hide_confirmarSenha = true;

  formCadastro: FormGroup

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
      ])],
      senha: ['', Validators.compose([
      ])],
      confirmarSenha: ['', Validators.compose([
      ])],
      nome: ['', Validators.compose([
      ])],
      sobrenome: ['', Validators.compose([
      ])]
    })
  }

  submitForm(){
    const dados = {
      usuario: this.formCadastro.controls['usuario'].value,
      senha: this.formCadastro.controls['senha'].value,
      confirmarSenha: this.formCadastro.controls['confirmarSenha'].value,
      nome: this.formCadastro.controls['nome'].value,
      sobrenome: this.formCadastro.controls['sobrenome'].value
    }

    console.log(dados)

    //this.formCadastro.reset()
  }
}
