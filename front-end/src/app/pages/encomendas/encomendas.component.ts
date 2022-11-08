import { Component, OnInit } from '@angular/core';
import { Pacote } from 'src/app/model/Pacote';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  todos: Pacote[]
  entregues: Pacote[]
  pendentes: Pacote[]

  displayedTodos: String[] = ["codigoOperadorLogistica"]
  displayedEdentregues: String[] = ["codigoOperadorLogistica"]
  displayedPendentes: String[] = ["codigoOperadorLogistica"]

  constructor() {
    this.todos = new PacoteService().getAllPackages()
    this.entregues = new PacoteService().getDeliveredPackages()
    this.pendentes = new PacoteService().getPendingPackages()
  }

  ngOnInit(): void {
  }

  /*erroLogin(){
    const dialogRef = this.dialog.open(ErroLoginComponent);

    //dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    //});
  }*/
}
