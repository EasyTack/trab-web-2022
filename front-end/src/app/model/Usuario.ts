import { Configuracao } from "./Configuracao"
import { Pessoa } from "./Pessoa"

export class Usuario extends Pessoa {
    usuario: String = ''
    senha: String = ''
    configuracao: Configuracao = new Configuracao()
}