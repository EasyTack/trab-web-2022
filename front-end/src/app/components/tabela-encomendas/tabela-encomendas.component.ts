import { Component, Input, OnInit } from '@angular/core';
import { Pacote } from 'src/app/model/Pacote';

@Component({
  selector: 'app-tabela-encomendas',
  templateUrl: './tabela-encomendas.component.html',
  styleUrls: ['./tabela-encomendas.component.css']
})
export class TabelaEncomendasComponent implements OnInit {

  @Input() pacotes: Pacote[] = []
  @Input() displayed: String[] = []

  constructor() {
  }

  ngOnInit(): void {
  }
}
