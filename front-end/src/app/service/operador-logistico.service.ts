import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataLogisticOperator } from '../dados/dataLogisticOperator';
import { OperadorLogistico } from '../model/OperadorLogistico';

@Injectable({
  providedIn: 'root'
})
export class OperadorLogisticoService {

  constructor() { }

  getAllLogisticOperator(){
    return new dataLogisticOperator().get()
  }
}
