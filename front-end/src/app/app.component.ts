import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ){}

  ngOnInit(): void {
    //this.openConfig()
  }
  
  openConfig(){
    const dialogConfiguracao = this.dialog.open(ConfiguracaoComponent);
  }

  changeRegistration(){
    this.router.navigateByUrl(`/cadusr?id=12`);
  }

  logout(){
    console.log("Sair")
  }
}
