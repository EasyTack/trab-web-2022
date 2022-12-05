import { Pacote } from '../../pacotes/entities/pacote.entity';

export interface IEtiqueta {
  readonly nome: string;
  readonly cor: string;
  readonly codigo: string;
  // readonly pacote: Pacote;
}
