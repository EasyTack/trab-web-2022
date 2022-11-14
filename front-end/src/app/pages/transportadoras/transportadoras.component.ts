import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/OperadorLogistico';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {

  trasportadoras$?: Observable<OperadorLogistico[]>

  constructor(private operadorLogisticoService: OperadorLogisticoService) { }

  ngOnInit(): void {
    this.trasportadoras$ = this.operadorLogisticoService.getTodos()
  }

}
