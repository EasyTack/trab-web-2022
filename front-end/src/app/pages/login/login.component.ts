import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
    const dados = {
      usuario: this.formLogin.controls['usuario'].value,
      senha: this.formLogin.controls['senha'].value
    }

    console.log(dados)

    if(dados.usuario != '' && dados.senha != ''){
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
    const dados = {
      usuario: this.formLogin.controls['usuario'].value,
      senha: this.formLogin.controls['senha'].value
    }

    console.log(dados)

    //this.formLogin.reset()
  }

  recoverPassword(){
    this.recover_password = true
  }
}
