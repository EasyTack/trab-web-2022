import { Entidade } from "./Entidade";

export class Etiqueta extends Entidade {
    nome: String
    cor: String
    codigo: String

    constructor(id: String = "", nome: String = "", cor: String = "", codigo: String = ""){
        super(id)
        this.nome = nome
        this.cor = cor
        this.codigo = codigo
    }
}