import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarEncomendaComponent } from 'src/app/components/cadastrar-encomenda/cadastrar-encomenda.component';
import { FiltrosComponent } from 'src/app/components/filtros/filtros.component';
import { Pacote } from 'src/app/model/Pacote';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  pacotes: Pacote[]

  displayedTodos: String[] = ["select", "codigoOperadorLogistica", "status", "dataPostagem", "dataEntrega", "origem", "destino"]

  constructor(private dialog: MatDialog) {
    this.pacotes = new PacoteService().getAllPackages()
  }

  ngOnInit(): void {
    //this.dialogAdicionar()
    //this.dialogFiltrar()
  }

  dialogAdicionar(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent);
    
    /*dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });*/
  }

  dialogFiltrar(){
    const dialogRef = this.dialog.open(FiltrosComponent);
    
    /*dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });*/
  }
}
