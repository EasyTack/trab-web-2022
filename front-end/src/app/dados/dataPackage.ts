import { Etiqueta } from "../model/Etiqueta";
import { Pacote } from "../model/Pacote";
import { dataTag } from "./dataTag";

export class dataPackage {
    dados: Pacote[] = []

    etiquetas: Etiqueta[] = new dataTag().get()

    get(){
        let p1, p2, p3, p4, p5, p6, p7, p8, p9, p10

        p1 = new Pacote("001", "AA123456789BR", "Salvador-BA", "Rio de Janeiro-RJ", new Date("2020-09-12"), new Date("2020-10-15"))
        p2 = new Pacote("002", "AA357159642FR", "Belo Horizonte-MG", "Campinas-SP", new Date("2021-05-25"), new Date("2021-06-30"))
        p3 = new Pacote("003", "AS975412545IN", "Palmas-TO", "Bom Jesus-ES", new Date("2022-02-02"), new Date("2022-02-15"))
        p4 = new Pacote("004", "AT951748563UE", "Bom-Jesus-RJ", "Boa Vista-RO", new Date("2022-01-01"), new Date("2022-01-26"))
        p5 = new Pacote("005", "SL917346285JP", "Florianópolis-SC", "Porto Alegre-RS", new Date("2020-09-07"), new Date("2020-09-30"))
        p6 = new Pacote("006", "BF551648751ES", "Maceió-AL", "Recipe-PE", new Date("2020-07-15"), new Date("2020-09-30"))
        p7 = new Pacote("007", "BE858264132AL", "João Pessoa-PB", "Natal-RN", new Date("2021-04-14"), new Date("2021-05-05"))
        p8 = new Pacote("008", "CK421597565CH", "Goiânia-GO", "Colatina-ES", new Date("2020-04-12"), new Date("2020-04-25"))
        p9 = new Pacote("009", "CM664425711CH", "São Gonçalo-RJ", "Guarulhos-SP", new Date("2021-09-09"), new Date("2021-10-07"))
        p10 = new Pacote("010", "CO162516800TW", "Duque de Caxias-RJ", "Guarulhos-SP", new Date("2022-05-01"), new Date("2022-06-01"))

        p1.etiquetas.push(this.etiquetas[0])
        p2.etiquetas.push(this.etiquetas[0])
        p3.etiquetas.push(this.etiquetas[0])
        p4.etiquetas.push(this.etiquetas[0])
        p5.etiquetas.push(this.etiquetas[0])

        p5.etiquetas.push(this.etiquetas[1])
        p6.etiquetas.push(this.etiquetas[2])
        p7.etiquetas.push(this.etiquetas[3])
        p8.etiquetas.push(this.etiquetas[4])
        p9.etiquetas.push(this.etiquetas[5])
        p1.etiquetas.push(this.etiquetas[5])

        this.dados = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]


        /*this.dados.push(new Pacote("001", "AA123456789BR", "Salvador-BA", "Rio de Janeiro-RJ", new Date("2020-09-12"), new Date("2020-10-15")))
        this.dados.push(new Pacote("002", "AA357159642FR", "Belo Horizonte-MG", "Campinas-SP", new Date("2021-05-25"), new Date("2021-06-30")))
        this.dados.push(new Pacote("003", "AS975412545IN", "Palmas-TO", "Bom Jesus-ES", new Date("2022-02-02"), new Date("2022-02-15")))
        this.dados.push(new Pacote("004", "AT951748563UE", "Bom-Jesus-RJ", "Boa Vista-RO", new Date("2022-01-01"), new Date("2022-01-26")))
        this.dados.push(new Pacote("005", "SL917346285JP", "Florianópolis-SC", "Porto Alegre-RS", new Date("2020-09-07"), new Date("2020-09-30")))
        this.dados.push(new Pacote("006", "BF551648751ES", "Maceió-AL", "Recipe-PE", new Date("2020-07-15"), new Date("2020-09-30")))
        this.dados.push(new Pacote("007", "BE858264132AL", "João Pessoa-PB", "Natal-RN", new Date("2021-04-14"), new Date("2021-05-05")))
        this.dados.push(new Pacote("008", "CK421597565CH", "Goiânia-GO", "Colatina-ES", new Date("2020-04-12"), new Date("2020-04-25")))
        this.dados.push(new Pacote("009", "CM664425711CH", "São Gonçalo-RJ", "Guarulhos-SP", new Date("2021-09-09"), new Date("2021-10-07")))
        this.dados.push(new Pacote("010", "CO162516800TW", "Duque de Caxias-RJ", "Guarulhos-SP", new Date("2022-05-01"), new Date("2022-06-01")))*/

        return this.dados
    }
}







