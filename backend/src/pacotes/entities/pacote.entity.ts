import { Column, ManyToOne, OneToMany } from 'typeorm';
import { Entidade } from '../../entitdades-abstratas/entidade';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { RegistroMovimentacoes } from '../../registro-movimentacoes/entities/registro-movimentacoes.entity';
import { OperadorLogistico } from '../../operadores-logisticos/entities/operador-logistico.entity';
import { Etiqueta } from '../../etiquetas/entities/etiqueta.entity';

export class Pacote extends Entidade {
  @Column()
  data_postagem: Date;

  @Column()
  data_entrega: Date;

  @Column()
  codigo_operador_logistico: string;

  @Column()
  local_origem: string;

  @Column()
  local_destino: string;

  @Column()
  status: string;

  // @OneToMany(
  //   () => RegistroMovimentacoes,
  //   (movimentacoes) => movimentacoes.pacote
  // )
  // movimentacoes: RegistroMovimentacoes[];

  // @OneToMany(() => Etiqueta, (etiqueta) => etiqueta.pacote)
  // etiquetas: Etiqueta[];

  // @ManyToOne(() => Usuario, (usuario) => usuario.pacotes)
  // usuario: Usuario;

  // @ManyToOne(
  //   () => OperadorLogistico,
  //   (operador_logistico) => operador_logistico.pacotes
  // )
  // operador_logistico: OperadorLogistico;
}
