import { Injectable } from '@angular/core';
import { Pacote } from '../model/Pacote';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  constructor() { }

  getAllPackages(): Pacote[]{
    return [
      new Pacote('001'),
      new Pacote('002'),
      new Pacote('003'),
      new Pacote('004')
    ]
  }

  getPendingPackages(): Pacote[]{
    return [
      new Pacote('0100'),
      new Pacote('0200')
    ]
  }

  getDeliveredPackages(): Pacote[]{
    return [
      new Pacote('0010'),
      new Pacote('0020'),
      new Pacote('0030'),
      new Pacote('0040'),
      new Pacote('0050'),
      new Pacote('0060'),
      new Pacote('0070'),
      new Pacote('0080'),
    ]
  }
}
