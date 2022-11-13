import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarEncomendaComponent } from 'src/app/components/cadastrar-encomenda/cadastrar-encomenda.component';
import { FiltrosComponent } from 'src/app/components/filtros/filtros.component';
import { Pacote } from 'src/app/model/Pacote';
import { PacoteService } from 'src/app/service/pacote.service';
import { Filtro, TipoFiltro } from './Filtro';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  @Input() objetosSelecionados: number[] = []
  filtro: Filtro[] = []

  pacotes: Pacote[]

  constructor(private dialog: MatDialog) {
    this.pacotes = new PacoteService().getAllPackages()
  }

  ngOnInit(): void {
    //this.dialogAdicionar()
    //this.dialogFiltrar()
  }

  dialogAdicionar(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dialogFiltrarCodigo(){
    let ft = new Filtro(TipoFiltro.Codigo)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Codigo})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaCodigo = result.buscaCodigo
        this.filtro.push(ft)
      }
    })
  }

  dialogFiltrarOrigem(){
    let ft = new Filtro(TipoFiltro.Origem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Origem})    

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaOrigem = result.buscaOrigem
        this.filtro.push(ft)
      }
    })
  }

  dialogFiltrarDestino(){
    let ft = new Filtro(TipoFiltro.Destino)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Destino}) 

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaDestino = result.buscaDestino
        this.filtro.push(ft)
      }
    })
  }

  dialogFiltrarEtiqueta(){
    let ft = new Filtro(TipoFiltro.Etiqueta)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Etiqueta})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaEtiqueta = result.buscaEtiqueta
        this.filtro.push(ft)
      }
    })
  }

  dialogFiltrarStatus(){}

  dialogFiltrarPeriodoPostagem(){
    let ft = new Filtro(TipoFiltro.DataPostagem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataPostagem})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaDataPostagemInicio = result.buscaDataPostagemInicio
        ft.buscaDataPostagemFim = result.buscaDataPostagemFim
        this.filtro.push(ft)
      }
    })
  }

  dialogFiltrarPeriodoEntrega(){
    let ft = new Filtro(TipoFiltro.DataEntrega)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataEntrega})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        ft.buscaDataEntregaInicio = result.buscaDataEntregaInicio
        ft.buscaDataEntregaFim = result.buscaDataEntregaFim
        this.filtro.push(ft)
      }
    })
  }

  atualizarObjetosSelecionados(objetosSelecionados: number[]){
    this.objetosSelecionados = objetosSelecionados
  }

  removerEncomenda(){
    let idList: String[] = []
    this.objetosSelecionados.forEach((i)=>{idList.push(this.pacotes[i].id)})

    if(idList.length > 0) console.log(idList)
    else console.log("Não há dados para serem apagados")
  }

  removerFiltro(filtro: Filtro, index: number){
    this.filtro.splice(index, 1);
    console.log(`Removendo index: ${index} -- ${filtro.getString()}`)
  }
}
