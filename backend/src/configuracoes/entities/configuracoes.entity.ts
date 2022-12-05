import { Entidade } from '../../entitdades-abstratas/entidade';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Configuracoes extends Entidade {
  @Column()
  update_automatico: boolean;

  @Column()
  tipo_ordenacao_padrao: number;

  @Column()
  intervalo_atualizacao: number;

  @Column()
  horario_comercial_atualizacao: boolean;

  // @OneToOne(() => Usuario)
  // @JoinColumn()
  // usuario: Usuario;
}
