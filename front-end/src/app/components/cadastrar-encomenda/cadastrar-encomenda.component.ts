import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OperadorLogistico } from 'src/app/model/OperadorLogistico';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';
import { PacoteService } from 'src/app/service/pacote.service';

@Component({
  selector: 'app-cadastrar-encomenda',
  templateUrl: './cadastrar-encomenda.component.html',
  styleUrls: ['./cadastrar-encomenda.component.css']
})
export class CadastrarEncomendaComponent implements OnInit {

  trasportadoras: OperadorLogistico[] = []
  formAdicionarEncomenda: FormGroup

  constructor(private fb: FormBuilder, private dialog: MatDialogRef <CadastrarEncomendaComponent>){
    this.formAdicionarEncomenda = this.createForm(this.fb)
    dialog.disableClose = true;
  }

  ngOnInit(): void {
    this.trasportadoras = new OperadorLogisticoService().getAllLogisticOperator()
  }

  createForm(fb: FormBuilder){
    return fb.group({
      idOperadorLogistico: [''],
      codigoOperadorLogistico: ['']
    })
  }

  create(){
    const c = {
      idOperadorLogistico: this.formAdicionarEncomenda.controls['idOperadorLogistico'].value,
      codigoOperadorLogistico: this.formAdicionarEncomenda.controls['codigoOperadorLogistico'].value,
    }

    if(c.idOperadorLogistico && c.codigoOperadorLogistico){
      new PacoteService().createPackage(c)
      this.close()
    }
  }

  close(){
    this.dialog.close()
  }
}
