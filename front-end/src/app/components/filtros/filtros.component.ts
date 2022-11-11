import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  formFilter: FormGroup

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  constructor(private fb: FormBuilder){
    this.formFilter = this.createForm(this.fb)

    this.formFilter.controls['buscaCodigo'].disable()
    this.formFilter.controls['buscaOrigem'].disable()
    this.formFilter.controls['buscaDestino'].disable()
  }

  ngOnInit(): void {
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
      buscaDestino: ['']
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

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });
}
