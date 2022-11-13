import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Filtro, TipoFiltro } from 'src/app/pages/encomendas/Filtro';
import { EtiquetasService } from 'src/app/service/etiquetas.service';
import { ConfiguracaoComponent } from '../configuracao/configuracao.component';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() filterTipes = new EventEmitter()
  idEtiquetaSelecionada: any

  formFiltro: FormGroup
  etiquetas: Etiqueta[] = []

  auxDate = new FormGroup({
    inicio: new FormControl(),
    fim: new FormControl(),
  });

  constructor(private fb: FormBuilder, private dialog: MatDialogRef <ConfiguracaoComponent>, @Inject(MAT_DIALOG_DATA) public tipoFiltro: TipoFiltro){
    //dialog.disableClose = true;

    this.formFiltro = this.createForm(this.fb)
  }

  ngOnInit(): void {
    this.etiquetas = new EtiquetasService().getAllTags()
  }

  createForm(fb: FormBuilder){
    return fb.group({
      buscaCodigo: [''],
      buscaOrigem: [''],
      buscaDestino: [''],
      buscaEtiqueta: [''],
      buscaPeriodoInicio: [],
      buscaPeriodoFim: []
    })
  }

  tipoBuscaCodigo(): TipoFiltro { return TipoFiltro.Codigo }
  tipoBuscaOrigem(): TipoFiltro { return TipoFiltro.Origem }
  tipoBuscaDestino(): TipoFiltro { return TipoFiltro.Destino }
  tipoBuscaEtiqueta(): TipoFiltro { return TipoFiltro.Etiqueta }
  tipoBuscaStatus(): TipoFiltro { return TipoFiltro.Status }
  tipoBuscaDataPostagem(): TipoFiltro { return TipoFiltro.DataPostagem }
  tipoBuscaDataEntrega(): TipoFiltro { return TipoFiltro.DataEntrega }
}
