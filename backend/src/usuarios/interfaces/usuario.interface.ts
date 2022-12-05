import { Configuracoes } from '../../configuracoes/entities/configuracoes.entity';
import { Pacote } from '../../pacotes/entities/pacote.entity';

export interface IUsuario {
  readonly id: string;
  readonly nome: string;
  readonly documento: string;
  readonly usuario: string;
  readonly email: string;
  readonly senha: string;
  // readonly configuracao: Configuracoes;
  // readonly pacotes: Pacote[];
}
