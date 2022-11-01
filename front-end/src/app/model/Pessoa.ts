import { Entidade } from "./Entidade"
import { Pacote } from "./Pacote"

export abstract class Pessoa extends Entidade {
    nome: String = ''
    sobrenome: String = ''
    documento: String = ''
    pacotes?: Pacote[]
}