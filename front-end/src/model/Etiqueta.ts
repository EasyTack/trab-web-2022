import { Entidade } from "./Entidade";
import { RegistroMovimentacao } from "./RegistroMovimentacao";

export class Etiqueta extends Entidade {
    nome: String = ''
    cor: String = ''
    codigo: String = ''
    registroMovimentacoes?: RegistroMovimentacao[]
}