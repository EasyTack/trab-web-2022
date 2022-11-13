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

    constructor(id?:String, codigoOperadorLogistica?: String, localOrigem?: String, localDestino?: String, dataPostagem?: Date, dataEntrega?: Date){
        super(id)
        this.codigoOperadorLogistica = codigoOperadorLogistica;
        this.localOrigem = localOrigem;
        this.localDestino = localDestino;
        this.dataPostagem = dataPostagem;
        this.dataEntrega = dataEntrega;
    }

    getDataPostagemFormatada(): String{
        if(this.dataPostagem){
            let dia  = this.dataPostagem.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (this.dataPostagem.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = this.dataPostagem.getFullYear();
            return diaF+"/"+mesF+"/"+anoF;
        }

        return ''
    }

    getDataEntregaFormatada(): String{
        if(this.dataEntrega){
            let dia  = this.dataEntrega.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (this.dataEntrega.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = this.dataEntrega.getFullYear();
            return diaF+"/"+mesF+"/"+anoF;
        }

        return ''
    }
}