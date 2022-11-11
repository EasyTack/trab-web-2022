import { Component, OnInit } from '@angular/core';
import { OperadorLogistico } from 'src/app/model/OperadorLogistico';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {

  trasportadoras: OperadorLogistico[] = []

  constructor() { }

  ngOnInit(): void {
    this.trasportadoras = new OperadorLogisticoService().getAllLogisticOperator()
  }

}
