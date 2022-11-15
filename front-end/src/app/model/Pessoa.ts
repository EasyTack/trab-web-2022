import { Entidade } from "./Entidade"
import { Pacote } from "./Pacote"

export abstract class Pessoa extends Entidade {
    nome: String
    sobrenome: String
    cpf: String
    pacotes: Pacote[] = []

    constructor(nome: String = '', sobrenome: String = '', cpf: String = ''){
        super()
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
    }
}