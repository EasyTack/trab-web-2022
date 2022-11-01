import { Entidade } from "./Entidade";

export class RegistroMovimentacao extends Entidade {
    dataMovimentacao?: Date
    localOrigem?: String
    localDestino?: String
    status?: String
}