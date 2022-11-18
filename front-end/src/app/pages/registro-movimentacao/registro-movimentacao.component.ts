import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pacote } from 'src/app/model/pacote.model';
import { RegistroMovimentacao } from 'src/app/model/registroMovimentacao.model';
import { RegistroMovimentacaoService } from 'src/app/service/registroMovimentacao';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-registro-movimentacao',
  templateUrl: './registro-movimentacao.component.html',
  styleUrls: ['./registro-movimentacao.component.css']
})
export class RegistroMovimentacaoComponent implements OnInit {

  registroMovimentacoes?: RegistroMovimentacao[]
  pacote?: Pacote
  carregandoLista: Boolean = false
  carregandoPacote: Boolean = false

  constructor(
    private route: ActivatedRoute,
    private registroMovimentacaoService: RegistroMovimentacaoService,
    private pacoteService: PacoteService
  ) { }

  ngOnInit(): void {

    this.carregandoLista = true
    this.route.queryParams.subscribe(params => {
      let id = params['id']

      this.registroMovimentacaoService.getPorIdPacote(id).subscribe((rm: RegistroMovimentacao[]) =>{
        this.registroMovimentacoes = rm
        this.carregandoLista = false
      })

      this.pacoteService.getId(id).subscribe((p: Pacote) => {
        this.pacote = p
        this.carregandoPacote = false
      })
    })
  }
}
