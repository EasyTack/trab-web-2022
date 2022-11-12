import { Etiqueta } from "../model/Etiqueta";

export class dataTag {
    dados: Etiqueta[] = []

    get(){
        this.dados.push(new Etiqueta("tag001", "Presente", "", ""))
        this.dados.push(new Etiqueta("tag002", "Trabalho", "", ""))
        this.dados.push(new Etiqueta("tag003", "Enfeites de Natal", "", ""))
        this.dados.push(new Etiqueta("tag004", "Computador Gamer", "", ""))
        this.dados.push(new Etiqueta("tag005", "Esposa", "", ""))
        this.dados.push(new Etiqueta("tag006", "Filho", "", ""))
        return this.dados
    }
}







