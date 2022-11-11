import { Pacote } from "../model/Pacote";

export class dataPackage {
    dados: Pacote[] = []

    get(){
        this.dados.push(new Pacote("001", "AA123456789BR", "Salvador-BA", "Rio de Janeiro-RJ", new Date("2020-09-12"), new Date("2020-10-15")))
        this.dados.push(new Pacote("002", "AA357159642FR", "Belo Horizonte-MG", "Campinas-SP", new Date("2021-05-25"), new Date("2021-06-30")))
        this.dados.push(new Pacote("003", "AS975412545IN", "Palmas-TO", "Bom Jesus-ES", new Date("2022-02-02"), new Date("2022-02-15")))
        this.dados.push(new Pacote("004", "AT951748563UE", "Bom-Jesus-RJ", "Boa Vista-RO", new Date("2022-01-01"), new Date("2022-01-26")))
        this.dados.push(new Pacote("005", "SL917346285JP", "Florianópolis-SC", "Porto Alegre-RS", new Date("2020-09-07"), new Date("2020-09-30")))
        this.dados.push(new Pacote("006", "BF551648751ES", "Maceió-AL", "Recipe-PE", new Date("2020-07-15"), new Date("2020-09-30")))
        this.dados.push(new Pacote("007", "BE858264132AL", "João Pessoa-PB", "Natal-RN", new Date("2021-04-14"), new Date("2021-05-05")))
        this.dados.push(new Pacote("008", "CK421597565CH", "Goiânia-GO", "Colatina-ES", new Date("2020-04-12"), new Date("2020-04-25")))
        this.dados.push(new Pacote("009", "CM664425711CH", "São Gonçalo-RJ", "Guarulhos-SP", new Date("2021-09-09"), new Date("2021-10-07")))
        this.dados.push(new Pacote("010", "CO162516800TW", "Duque de Caxias-RJ", "Guarulhos-SP", new Date("2022-05-01"), new Date("2022-06-01")))

        return this.dados
    }
}







