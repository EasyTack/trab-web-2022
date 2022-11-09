import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarEncomendaComponent } from 'src/app/components/cadastrar-encomenda/cadastrar-encomenda.component';
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

  displayedTodos: String[] = ["codigoOperadorLogistica", "actions"]
  displayedEdentregues: String[] = ["codigoOperadorLogistica", "actions"]
  displayedPendentes: String[] = ["codigoOperadorLogistica", "actions"]

  constructor(private dialog: MatDialog) {
    this.todos = new PacoteService().getAllPackages()
    this.entregues = new PacoteService().getDeliveredPackages()
    this.pendentes = new PacoteService().getPendingPackages()
  }

  ngOnInit(): void {
    //this.adicionar()
  }

  adicionar(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent, {
      data: {close: this.fecharDialig}
    });
    
    /*dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });*/
  }

  fecharDialig(){
    this.dialog.closeAll()
  }
}
