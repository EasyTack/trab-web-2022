import { Entidade } from "./Entidade"
import { Pacote } from "./Pacote"

export class OperadorLogistico  extends Entidade{
    cnpj: String
    razaoSocial: String
    nomeFantasia: String
    pacotes: Pacote[] = []

    constructor(cnpj: String, razaoSocial: String, nomeFantasia: String){
        super()
        this.cnpj = cnpj
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
    }
}