import { Pacote } from "../../pacotes/entities/pacote.entity";

export interface IRegistroMovimentacoes {
  readonly data_movimentacao: Date;
  readonly local_origem: string;
  readonly local_destino: string;
  readonly status: string;
  readonly response: object;
  // readonly pacote: Pacote
}
