import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

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
      nome: ['', Validators.compose([
      ])],
      sobrenome: ['', Validators.compose([
      ])]
    })
  }

  submitForm(){
    
  }
}
