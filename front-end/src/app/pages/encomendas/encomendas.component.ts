import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEtiquetaComponent } from 'src/app/components/encomendas-page/etiquetas/adicionar-etiqueta/adicionar-etiqueta.component';
import { CadastrarEncomendaComponent } from 'src/app/components/encomendas-page/encomendas/cadastrar-encomenda/cadastrar-encomenda.component';
import { CriarEtiquetaComponent } from 'src/app/components/encomendas-page/etiquetas/criar-etiqueta/criar-etiqueta.component';
import { FiltrosComponent } from 'src/app/components/encomendas-page/filtros/filtros.component';
import { ControladorTabela } from 'src/app/components/encomendas-page/tabela/tabela-encomendas/ControladorTabela';
import { PacoteService } from 'src/app/service/pacote.service';
import { Filtro, TipoFiltro } from '../../model/filtro.model';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  filtros: Filtro[] = []
  listaPacotes$ = new ControladorTabela(this.pacoteService)

  constructor(
    private dialog: MatDialog,
    private pacoteService: PacoteService
  ) {
  }

  ngOnInit(): void {
    this.listaPacotes$?.buscaTodos()

    //this.dialogAdicionar()
    //this.dialogFiltrar()
    //this.dialogCriarEtiqueta()
    //this.dialogFiltrarEtiqueta()
    //this.dialogAdicionarEtiqueta()
  }

  dialogAdicionarEncomenda(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      const data = dialogRef.componentInstance.pacote
      if(data) this.pacoteService.salvar(data)
    });
  }

  removerEncomenda(){
    if(this.listaPacotes$.idPacotesSelecionados().length > 0)
      this.pacoteService.deletarGrupo(this.listaPacotes$.idPacotesSelecionados())
  }

  dialogCriarEtiqueta(){
    const dialogRef = this.dialog.open(CriarEtiquetaComponent)

    dialogRef.afterClosed().subscribe(result => {
      if(result?.nome && result?.cor && (this.listaPacotes$.idPacotesSelecionados().length > 0))
        console.log(`Criar etiqueta: ${result.nome}, ID(s):  ${this.listaPacotes$.idPacotesSelecionados()}`)
      }
    )
  }

  dialogEditarEtiqueta(){
    console.log("Criar editar etiqueta")
  }

  dialogAdicionarEtiqueta(){
    const dialogRef = this.dialog.open(AdicionarEtiquetaComponent)

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(`Adicionar etiqueta: ${result.nome} ID(s): ${this.listaPacotes$.idPacotesSelecionados()}`)
      }
    })
  }

  removerEtiqueta(){
    console.log("Considerações a serem feitas")

    if(this.listaPacotes$.idPacotesSelecionados().length > 0)
      console.log(`Remover etiquetas: ${this.listaPacotes$.idPacotesSelecionados()}`)
  }

  dialogFiltrarCodigo(){
    let ft = new Filtro(TipoFiltro.Codigo)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Codigo})

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaCodigo){
        ft.buscaCodigo = result.buscaCodigo
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarOperadorLogistico(){
    let ft = new Filtro(TipoFiltro.OperadorLogistico)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.OperadorLogistico})

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaOperadorLogistico){
        ft.buscaOperadorLogistico = result.buscaOperadorLogistico
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarOrigem(){
    let ft = new Filtro(TipoFiltro.Origem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Origem})    

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaOrigem){
        ft.buscaOrigem = result.buscaOrigem
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarDestino(){
    let ft = new Filtro(TipoFiltro.Destino)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Destino}) 

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaDestino){
        ft.buscaDestino = result.buscaDestino
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarEtiqueta(){
    let ft = new Filtro(TipoFiltro.Etiqueta)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Etiqueta})

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaEtiqueta){
        ft.buscaEtiqueta = result.buscaEtiqueta
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarStatus(){}

  dialogFiltrarPeriodoPostagem(){
    let ft = new Filtro(TipoFiltro.DataPostagem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataPostagem})

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaPeriodoInicio && result?.buscaPeriodoFim){
        ft.buscaDataPostagemInicio = result.buscaPeriodoInicio
        ft.buscaDataPostagemFim = result.buscaPeriodoFim
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  dialogFiltrarPeriodoEntrega(){
    let ft = new Filtro(TipoFiltro.DataEntrega)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataEntrega})

    dialogRef.afterClosed().subscribe(result => {
      if(result?.buscaPeriodoInicio && result?.buscaPeriodoFim){
        ft.buscaDataEntregaInicio = result.buscaPeriodoInicio
        ft.buscaDataEntregaFim = result.buscaPeriodoFim
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(this.filtros)
      }
    })
  }

  removerFiltro(filtro: Filtro, index: number){
    this.filtros.splice(index, 1);
    this.listaPacotes$.buscaCustom(this.filtros)
  }
}
