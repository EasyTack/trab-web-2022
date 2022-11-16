import { Entidade } from "./entidade.model"
import { Pacote } from "./pacote.model"

export class OperadorLogistico  extends Entidade{
    cnpj?: String
    razaoSocial?: String
    nomeFantasia?: String
    pacotes: Pacote[] = []

    constructor(cnpj?: String, razaoSocial?: String, nomeFantasia?: String){
        super()
        if(cnpj) this.cnpj = cnpj
        if(razaoSocial) this.razaoSocial = razaoSocial
        if(nomeFantasia) this.nomeFantasia = nomeFantasia
    }
}