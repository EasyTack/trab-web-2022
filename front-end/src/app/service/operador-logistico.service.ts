import { Injectable } from '@angular/core';
import { dataLogisticOperator } from '../dados/dataLogisticOperator';
import { OperadorLogistico } from '../model/OperadorLogistico';

@Injectable({
  providedIn: 'root'
})
export class OperadorLogisticoService {

  constructor() { }

  getAllLogisticOperator(): OperadorLogistico[]{
    return new dataLogisticOperator().get()
  }
}
