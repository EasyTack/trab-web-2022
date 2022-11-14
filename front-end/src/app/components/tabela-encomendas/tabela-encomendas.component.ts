import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Pacote } from 'src/app/model/Pacote';
import { DescreveEtiquetasComponent } from '../descreve-etiquetas/descreve-etiquetas.component';
import { map } from 'rxjs/operators';  

interface custonTable {
  pacote: Pacote,
  select: Boolean
}

@Component({
  selector: 'app-tabela-encomendas',
  templateUrl: './tabela-encomendas.component.html',
  styleUrls: ['./tabela-encomendas.component.css']
})
export class TabelaEncomendasComponent implements OnInit {

  @Output() eventListSelected: EventEmitter<number[]> = new EventEmitter<number[]>()

  @Input() pacotes: Pacote[] = []
  displayed: String[] = ["select", "codigoOperadorLogistica", "status", "dataPostagem", "dataEntrega", "origem", "destino", "etiqueta"]

  listaPacoltes: custonTable[] = []
  listaSelecionados: number[] = []
  allComplete: Boolean = false

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    /*this.pacotes$?.forEach(
      (pacotes) => {
        this.listaPacoltes = pacotes.map((e: Pacote) => {
          let p: custonTable = {
            pacote: e,
            select: false
          }
          return p
        })
      }
    )

    console.log(this.listaPacoltes[0])*/

    this.listaPacoltes = this.pacotes.map((e) => {
      let p: custonTable = {
        pacote: e,
        select: false
      }
      return p
    })
  }

  /* Checbox */
  handleRowClick(row: any){
    row.select = !row.select

    if(!row.select) this.allComplete = false
    else {
      let count = 0
      this.listaPacoltes.forEach((c) => {
        count += (c.select == true) ? 1 : 0
      })
      if(count == this.listaPacoltes.length) this.allComplete = true
    }

    this.rowsSelected()
  }

  /* Checbox */
  someComplete(): Boolean{
    let count = 0
    this.listaPacoltes.forEach((c) => {
      count += (c.select == true) ? 1 : 0
    })

    if(this.listaPacoltes.length == count || count == 0)
      return false
    else 
      return true
  }

  /* Checbox */
  updateAll(completed: boolean){
    if(completed == true) this.listaPacoltes.forEach((c) => {c.select = true})
    else this.listaPacoltes.forEach((c) => {c.select = false})
    this.rowsSelected()
  }

  /* Dados selecionados */
  rowsSelected(){
    this.listaSelecionados = []
    this.listaPacoltes.forEach((c, i) => {if(c.select) this.listaSelecionados.push(i)})
    this.eventListSelected.emit(this.listaSelecionados)
  }

  dialogDescreveEtiquetas(etiquetas: Etiqueta[]){
    if(etiquetas.length > 0 ) this.dialog.open(DescreveEtiquetasComponent, {data: etiquetas})
  }
}