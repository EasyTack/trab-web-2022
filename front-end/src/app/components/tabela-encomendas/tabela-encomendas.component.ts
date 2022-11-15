import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Pacote } from 'src/app/model/Pacote';
import { DescreveEtiquetasComponent } from '../descreve-etiquetas/descreve-etiquetas.component';
import { catchError, finalize, map } from 'rxjs/operators';  
import { MatTableDataSource } from '@angular/material/table';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { PacoteService } from 'src/app/service/pacote.service';

interface CustonTable {
  pacote: Pacote,
  select: Boolean
}

@Component({
  selector: 'app-tabela-encomendas',
  templateUrl: './tabela-encomendas.component.html',
  styleUrls: ['./tabela-encomendas.component.css']
})
export class TabelaEncomendasComponent implements OnInit {

  //@Output() eventListSelected: EventEmitter<number[]> = new EventEmitter<number[]>()

  //@Input() pacotes$?: Observable<Pacote[]>
  displayed: String[] = ["select", "codigoOperadorLogistica", "status", "dataPostagem", "dataEntrega", "origem", "destino", "etiqueta"]

  //listaPacoltes: CustonTable[] = []
  //listaSelecionados: number[] = []
  allComplete: Boolean = false
  //lista: Pacote[] = []

  listaPacotes$ = new ControladorTabela(this.pacoteService)

  constructor(private dialog: MatDialog, private pacoteService: PacoteService) {
  }

  ngOnInit(): void {
    this.listaPacotes$.busca()
    /*this.listaPacoltes = this.pacotes.map((e) => {
      let p: CustonTable = {
        pacote: e,
        select: false
      }
      return p
    })*/

    /*this.pacotes$?.subscribe((pacotes) => {
      this.listaPacoltes = pacotes.map((e) => {
        let p: CustonTable = {
          pacote: e,
          select: false
        }
        return p
      })
      console.log(this.listaPacoltes[0].pacote)
    })*/
  }

  /* Checbox */
  handleRowClick(row: any){
    row.select = !row.select

    /*if(!row.select) this.allComplete = false
    else {
      let count = 0
      this.listaPacoltes.forEach((c) => {
        count += (c.select == true) ? 1 : 0
      })
      if(count == this.listaPacoltes.length) this.allComplete = true
    }*/

    //this.rowsSelected()
  }

  /* Checbox */
  someComplete(): Boolean{
    /*let count = 0
    this.listaPacoltes.forEach((c) => {
      count += (c.select == true) ? 1 : 0
    })

    if(this.listaPacoltes.length == count || count == 0)
      return false
    else */
      return true
  }

  /* Checbox */
  updateAll(completed: boolean){
    /*if(completed == true) this.listaPacoltes.forEach((c) => {c.select = true})
    else this.listaPacoltes.forEach((c) => {c.select = false})
    this.rowsSelected()*/
  }

  /* Dados selecionados */
  rowsSelected(){
    /*this.listaSelecionados = []
    this.listaPacoltes.forEach((c, i) => {if(c.select) this.listaSelecionados.push(i)})
    this.eventListSelected.emit(this.listaSelecionados)*/
  }

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

/* Classe de controle para a tabela */
export class ControladorTabela extends DataSource<CustonTable> {

  private pacotesSubject = new BehaviorSubject<CustonTable[]>([]);
  private carregandoPacoteSubject = new BehaviorSubject<Boolean>(false);

  public carregango$ = this.carregandoPacoteSubject.asObservable();

  constructor(private pacoteService: PacoteService){
    super()
  }

  connect(collectionViewer: CollectionViewer): Observable<CustonTable[]> {
    return this.pacotesSubject.asObservable()
    /*return this.pacoteService.getTodos().pipe(map((pacotes: Pacote[]) => {
      return pacotes.map((pacote: Pacote) => {
        let p: CustonTable = {
          pacote: pacote,
          select: false
        }
        return p
      })  
    }))*/
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.pacotesSubject.complete();
    this.carregandoPacoteSubject.complete();
  }

  busca(){
    this.carregandoPacoteSubject.next(true);

    this.pacoteService.getTodos().pipe(map((pacotes: Pacote[]) => {
      return pacotes.map((pacote: Pacote) => {
        let p: CustonTable = {
          pacote: pacote,
          select: false
        }
        return p
      })  
    }),
      catchError(()=> of([])),
      finalize(() => this.carregandoPacoteSubject.next(false))
    ).subscribe(p => this.pacotesSubject.next(p))

    /*this.pacoteService.getTodos().pipe(
      catchError(()=> of([])),
      finalize(() => this.carregandoPacoteSubject.next(false))
    ).subscribe(p => this.pacotesSubject.next(p))*/
  }
}