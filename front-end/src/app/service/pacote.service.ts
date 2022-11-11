import { Injectable } from '@angular/core';
import { dataPackage } from '../dados/dataPackage';
import { Pacote } from '../model/Pacote';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  constructor() { }

  createPackage(data: any){
    console.log(data)
  }

  getAllPackages(): Pacote[]{
    return new dataPackage().get()
  }
}
