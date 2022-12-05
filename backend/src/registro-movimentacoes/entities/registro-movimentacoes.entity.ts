import { Column, ManyToOne } from 'typeorm';
import { Entidade } from '../../entitdades-abstratas/entidade';
import { Pacote } from '../../pacotes/entities/pacote.entity';

export class RegistroMovimentacoes extends Entidade {
  @Column()
  data_movimentacao: Date;

  @Column()
  local_origem: string;

  @Column()
  local_destino: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb' })
  response: object;

  // @ManyToOne(() => Pacote, (pacote) => pacote.movimentacoes) 
  // pacote: Pacote;
}
