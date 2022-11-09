import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-encomenda',
  templateUrl: './cadastrar-encomenda.component.html',
  styleUrls: ['./cadastrar-encomenda.component.css']
})
export class CadastrarEncomendaComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef <CadastrarEncomendaComponent>, /*@Inject() data: {name: string}*/){
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }
}
