import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide_senha = true;

  formLogin: FormGroup

  constructor(private fb: FormBuilder) {
    this.formLogin = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
        Validators.required,
        Validators.max(30)
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.max(30)
      ])]
    })
  }

  submitForm(){
    const dados = {
      usuario: this.formLogin.controls['usuario'].value,
      senha: this.formLogin.controls['senha'].value
    }

    console.log(dados)
  }
}
