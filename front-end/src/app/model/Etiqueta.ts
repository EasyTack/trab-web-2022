import { Entidade } from "./Entidade";

export class Etiqueta extends Entidade {
    nome: String
    cor: String

    constructor(nome: String = "", cor: String = "", codigo: String = ""){
        super()
        this.nome = nome
        this.cor = cor
    }
}