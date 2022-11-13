import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { EtiquetasService } from 'src/app/service/etiquetas.service';

@Component({
  selector: 'app-adicionar-etiqueta',
  templateUrl: './adicionar-etiqueta.component.html',
  styleUrls: ['./adicionar-etiqueta.component.css']
})
export class AdicionarEtiquetaComponent implements OnInit {

  etiquetas: Etiqueta[] = []
  formAdionarEtiqueta: FormGroup

  constructor(private fb: FormBuilder) { 
    this.formAdionarEtiqueta =  fb.group({id: []})
  }

  ngOnInit(): void {
    this.etiquetas = new EtiquetasService().getAllTags()
  }
}
