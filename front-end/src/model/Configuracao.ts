import { Entidade } from "./Entidade";

export class Configuracao extends Entidade {
    updateAutomatico: boolean = false
    tipoOrdenacaoPadrao: number = 0
    intervaloAtualizacao: number = 1
    horarioComerceialAtualizacao: boolean = false
}