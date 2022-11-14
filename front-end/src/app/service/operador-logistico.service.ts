import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperadorLogistico } from '../model/OperadorLogistico';

@Injectable({
  providedIn: 'root'
})
export class OperadorLogisticoService {

  constructor(private http: HttpClient) {}

  /*getAllLogisticOperator(){
    return []// new dataLogisticOperator().get()
  }*/

  getTodos(){
    return this.http.get<OperadorLogistico[]>('http://localhost:3001/angular/operadorLogistico/getTodos')
  }
}
