import { Entity, Column, ManyToOne } from 'typeorm';
import { Entidade } from '../../entitdades-abstratas/entidade';
import { Pacote } from '../../pacotes/entities/pacote.entity';

@Entity()
export class Etiqueta extends Entidade {
  @Column()
  nome: string;

  @Column()
  cor: string;

  @Column()
  codigo: string;

  // @ManyToOne(() => Pacote, (pacote) => pacote.etiquetas)
  // pacote: Pacote;
}
