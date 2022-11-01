import { Entidade } from "./Entidade";
import { RegistroMovimentacao } from "./RegistroMovimentacao";

export class Pacote extends Entidade {
    dataPostagem?: Date
    dataEntrega?: Date
    codigoOperadorLogistica?: String
    localOrigem?: String
    localDestino?: String;
    status?: String
    registroMovimentacoes?: RegistroMovimentacao[]
}