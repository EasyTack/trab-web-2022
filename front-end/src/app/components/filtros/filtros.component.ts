import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { EtiquetasService } from 'src/app/service/etiquetas.service';
import { ConfiguracaoComponent } from '../configuracao/configuracao.component';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() filterTipes = new EventEmitter()

  formFilter: FormGroup
  etiquetas: Etiqueta[] = []

  auxDate = new FormGroup({
    inicio: new FormControl(),
    fim: new FormControl(),
  });

  constructor(private fb: FormBuilder, private dialog: MatDialogRef <ConfiguracaoComponent>, @Inject(MAT_DIALOG_DATA) public dadosFiltro: any){
    dialog.disableClose = true;

    this.formFilter = this.createForm(this.fb)
  }

  ngOnInit(): void {
    this.etiquetas = new EtiquetasService().getAllTags()

    if(this.dadosFiltro){
      const { ftCodigo, ftOrigem, ftDestino, ftEtiqueta, ftPeriodo, 
        buscaCodigo, buscaOrigem, buscaDestino, buscaEtiqueta, buscaPeriodoInicio, buscaPeriodoFim } = this.dadosFiltro

      if(ftCodigo){
        this.formFilter.controls['ftCodigo'].setValue(ftCodigo)
        this.formFilter.controls['buscaCodigo'].setValue(buscaCodigo)
      
      } else this.formFilter.controls['buscaCodigo'].disable()

      if(ftOrigem){
        this.formFilter.controls['ftOrigem'].setValue(ftOrigem)
        this.formFilter.controls['buscaOrigem'].setValue(buscaOrigem)
        
      } else this.formFilter.controls['buscaOrigem'].disable()

      if(ftDestino){
        this.formFilter.controls['ftDestino'].setValue(ftDestino)
        this.formFilter.controls['buscaDestino'].setValue(buscaDestino)
      
      } else this.formFilter.controls['buscaDestino'].disable()

      if(ftEtiqueta){
        this.formFilter.controls['ftEtiqueta'].setValue(ftEtiqueta)
        this.formFilter.controls['buscaEtiqueta'].setValue(buscaEtiqueta)
      
      } else this.formFilter.controls['buscaEtiqueta'].disable()

      if(ftPeriodo) {
        this.formFilter.controls['ftPeriodo'].setValue(ftPeriodo)
        this.formFilter.controls['buscaPeriodoInicio'].setValue(buscaPeriodoInicio)
        this.formFilter.controls['buscaPeriodoFim'].setValue(buscaPeriodoFim)

      } else {
        this.formFilter.controls['buscaPeriodoInicio'].disable()
        this.formFilter.controls['buscaPeriodoFim'].disable()
        this.auxDate.controls['inicio'].disable()
        this.auxDate.controls['fim'].disable()
      }

    } else {
      this.formFilter.controls['buscaCodigo'].disable()
      this.formFilter.controls['buscaOrigem'].disable()
      this.formFilter.controls['buscaDestino'].disable()
      this.formFilter.controls['buscaEtiqueta'].disable()

      this.formFilter.controls['buscaPeriodoInicio'].disable()
      this.formFilter.controls['buscaPeriodoFim'].disable()
      this.auxDate.controls['inicio'].disable()
      this.auxDate.controls['fim'].disable()
    }
  }

  createForm(fb: FormBuilder){
    return fb.group({
      ftCodigo: [false],
      ftOrigem: [false],
      ftDestino: [false],
      ftEtiqueta: [false],
      ftPeriodo: [false],
      buscaCodigo: [''],
      buscaOrigem: [''],
      buscaDestino: [''],
      buscaEtiqueta: [''],
      buscaPeriodoInicio: [],
      buscaPeriodoFim: []
    })
  }

  limpaBuscaCodigo(){
    this.formFilter.controls['buscaCodigo'].setValue('');
    (this.formFilter.controls['ftCodigo'].value == false) ? this.formFilter.controls['buscaCodigo'].disable() : this.formFilter.controls['buscaCodigo'].enable();
  }

  limpaBuscaOrigem(){
    this.formFilter.controls['buscaOrigem'].setValue('');
    (this.formFilter.controls['ftOrigem'].value == false) ? this.formFilter.controls['buscaOrigem'].disable() : this.formFilter.controls['buscaOrigem'].enable();
  }

  limpaBuscaDestino(){
    this.formFilter.controls['buscaDestino'].setValue('');
    (this.formFilter.controls['ftDestino'].value == false) ? this.formFilter.controls['buscaDestino'].disable() : this.formFilter.controls['buscaDestino'].enable();
  }

  limparBuscaEtiqueta(){
    this.formFilter.controls['buscaEtiqueta'].setValue('');
    (this.formFilter.controls['ftEtiqueta'].value == false) ? this.formFilter.controls['buscaEtiqueta'].disable() : this.formFilter.controls['buscaEtiqueta'].enable();
  }

  limparBuscaPeriodo(){
    this.formFilter.controls['buscaPeriodoInicio'].setValue(null);
    this.formFilter.controls['buscaPeriodoFim'].setValue(null);
    this.auxDate.controls['inicio'].setValue(null);
    this.auxDate.controls['fim'].setValue(null);

    (this.formFilter.controls['ftPeriodo'].value == false) ? this.formFilter.controls['buscaPeriodoInicio'].disable() : this.formFilter.controls['buscaPeriodoInicio'].enable();
    (this.formFilter.controls['ftPeriodo'].value == false) ? this.formFilter.controls['buscaPeriodoFim'].disable() : this.formFilter.controls['buscaPeriodoFim'].enable();
    (this.formFilter.controls['ftPeriodo'].value == false) ? this.auxDate.controls['inicio'].disable() : this.auxDate.controls['inicio'].enable();
    (this.formFilter.controls['ftPeriodo'].value == false) ? this.auxDate.controls['fim'].disable() : this.auxDate.controls['fim'].enable();
  }
}
