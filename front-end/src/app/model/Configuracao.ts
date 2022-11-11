import { Entidade } from "./Entidade";

export class Configuracao extends Entidade {
    atualizacaoAutomatica: boolean = false
    tipoOrdenacaoPadrao: number = 0
    intervaloAtualizacao: number = 1
    horarioComercialAtualizacao: boolean = false
}