import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarEncomendaComponent } from 'src/app/components/cadastrar-encomenda/cadastrar-encomenda.component';
import { FiltrosComponent } from 'src/app/components/filtros/filtros.component';
import { Pacote } from 'src/app/model/Pacote';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  @Input() objetosSelecionados: number[] = []
  filtros: String[] = ['Todas as Encomendas']
  dadosFiltro: any

  pacotes: Pacote[]

  constructor(private dialog: MatDialog) {
    this.pacotes = new PacoteService().getAllPackages()
  }

  ngOnInit(): void {
    //this.dialogAdicionar()
    this.dialogFiltrar()
  }

  dialogAdicionar(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent);
    
    /*dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });*/
  }

  dialogFiltrar(){
    const dialogRef = this.dialog.open(FiltrosComponent, {data: this.dadosFiltro});
    
    dialogRef.afterClosed().subscribe(result => {
      
      if(result){
        this.dadosFiltro = result

        const { ftCodigo, ftOrigem, ftDestino, ftEtiqueta, ftPeriodo, 
          buscaCodigo, buscaOrigem, buscaDestino, buscaEtiqueta, buscaPeriodoInicio, buscaPeriodoFim } = result

        this.filtros = []

        if(ftCodigo || ftOrigem || ftDestino || ftEtiqueta || ftPeriodo){
          if(ftCodigo){this.filtros.push(`Código: ${buscaCodigo}`)}
          if(ftOrigem){this.filtros.push(`Origem: ${buscaOrigem}`)}
          if(ftDestino){this.filtros.push(`Destino: ${buscaDestino}`)}
          if(ftEtiqueta){this.filtros.push(`Etiqueta: ${buscaEtiqueta}`)}
          if(ftPeriodo){this.filtros.push(`Período: ${this.formatDate(buscaPeriodoInicio)} - ${this.formatDate(buscaPeriodoFim)}`)}
          
        } else {
          this.filtros.push('Todas as Encomendas')
        }
      }
    });
  }

  atualizarObjetosSelecionados(objetosSelecionados: number[]){
    this.objetosSelecionados = objetosSelecionados
  }

  removerEncomenda(){
    let idList: String[] = []
    this.objetosSelecionados.forEach((i)=>{idList.push(this.pacotes[i].id)})
    console.log(idList)
  }

  removerFiltro(filtro: String){
    this.filtros.splice(this.filtros.indexOf(filtro), 1);
    if(this.filtros.length == 0) this.filtros.push('Todas as Encomendas')
    console.log(filtro)
  }

  formatDate(date: Date): String{
    let dia  = date.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (date.getMonth()+1).toString(),
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = date.getFullYear();
      return diaF+"/"+mesF+"/"+anoF;
  }
}
