import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { DescreveEtiquetasComponent } from '../descreve-etiquetas/descreve-etiquetas.component';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-tabela-encomendas',
  templateUrl: './tabela-encomendas.component.html',
  styleUrls: ['./tabela-encomendas.component.css']
})
export class TabelaEncomendasComponent implements OnInit {

  @Input() listaPacotes$?: any
  displayed: String[] = ["select", "codigoOperadorLogistica", "status", "dataPostagem", "dataEntrega", "origem", "destino", "etiqueta"]

  constructor(private dialog: MatDialog, private pacoteService: PacoteService) {
  }

  ngOnInit(): void {}

  dialogDescreveEtiquetas(etiquetas: Etiqueta[]){
    if(etiquetas.length > 0 ) this.dialog.open(DescreveEtiquetasComponent, {data: etiquetas})
  }

  formatarData(data: Date): String{
    if(data){
      let dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(),
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
      return diaF+"/"+mesF+"/"+anoF;
    }

    return ''
  } 
}