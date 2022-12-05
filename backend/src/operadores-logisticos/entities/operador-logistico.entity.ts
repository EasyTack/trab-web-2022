import { Column, OneToMany } from 'typeorm';
import { Entidade } from '../../entitdades-abstratas/entidade';
import { Pacote } from '../../pacotes/entities/pacote.entity';

export class OperadorLogistico extends Entidade {
  @Column()
  documento: string;

  @Column()
  razao_social: string;

  @Column()
  nome_fantasia: string;

  // @OneToMany(() => Pacote, (pacote) => pacote.operador_logistico)
  // pacotes: Pacote[];
}
