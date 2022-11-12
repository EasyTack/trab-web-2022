import { Injectable } from '@angular/core';
import { dataTag } from '../dados/dataTag';
import { Etiqueta } from '../model/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor() { }

  createTag(data: any){
    console.log(data)
  }

  getAllTags(): Etiqueta[]{
    return new dataTag().get()
  }
}
