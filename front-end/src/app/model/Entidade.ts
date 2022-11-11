export abstract class Entidade {
    id: String = ''
    criadoEm?: Date
    atualizadoEm?: Date

    constructor(id?: String){
        if(id) this.id = id
    }
}