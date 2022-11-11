import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Pacote } from 'src/app/model/Pacote';

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

  @Input() pacotes: Pacote[] = []
  @Input() displayed: String[] = []

  listaPacoltes: custonTable[] = []

  allComplete: Boolean = false

  constructor() {
  }

  ngOnInit(): void {
    this.listaPacoltes = this.pacotes.map((e) => {
      let p: custonTable = {
        pacote: e,
        select: true
      }
      return p
    })
  }

  handleRowClick(row: any){
    row.select = !row.select
    console.log(row.select)
  }

  stateCheckbox(element: any): Boolean{
    return true
  }

  /*someComplete(){

  }*/

  /*allSelected = false

  selected: String[] = []

  allSelect(state: Boolean){
    console.log(state)
  }*/

  /*select(id: String){
    console.log(id)
  }
*/
  
}
