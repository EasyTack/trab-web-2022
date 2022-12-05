import { Entity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Configuracoes } from '../../configuracoes/entities/configuracoes.entity';
import { Pessoa } from '../../entitdades-abstratas/pessoa';
import { Pacote } from '../../pacotes/entities/pacote.entity';

@Entity()
export class Usuario extends Pessoa {
  @Column()
  usuario: string;

  @Column({ unique: true })
  documento: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 60 })
  senha: string;

  @OneToOne(() => Configuracoes)
  @JoinColumn()
  configuracao: Configuracoes;

  // @OneToMany(() => Pacote, (pacote) => pacote.usuario) 
  // pacotes: Pacote[];
}
