import { Entidade } from "./Entidade";
import { Etiqueta } from "./Etiqueta";
import { OperadorLogistico } from "./OperadorLogistico";
import { RegistroMovimentacao } from "./RegistroMovimentacao";

export class Pacote extends Entidade {
    dataPostagem?: Date
    dataEntrega?: Date
    codigoOperadorLogistica?: String
    localOrigem?: String
    localDestino?: String;
    status?: String
    etiquetas: Etiqueta[] = []
    operadorLogistico?: OperadorLogistico
    registroMovimentacoes?: RegistroMovimentacao[]

    constructor(codigoOperadorLogistica?: String, localOrigem?: String, localDestino?: String, dataPostagem?: Date, dataEntrega?: Date){
        super()
        this.codigoOperadorLogistica = codigoOperadorLogistica;
        this.localOrigem = localOrigem;
        this.localDestino = localDestino;
        this.dataPostagem = dataPostagem;
        this.dataEntrega = dataEntrega;
    }
}