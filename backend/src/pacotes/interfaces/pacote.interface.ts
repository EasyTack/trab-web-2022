import { RegistroMovimentacoes } from "../../registro-movimentacoes/entities/registro-movimentacoes.entity";
import { Etiqueta } from "../../etiquetas/entities/etiqueta.entity";
import { OperadorLogistico } from "../../operadores-logisticos/entities/operador-logistico.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

export interface IPacote {
  readonly data_postagem: Date;
  readonly data_entrega: Date;
  readonly codigo_operador_logistico: string;
  readonly local_origem: string;
  readonly local_destino: string;
  readonly status: string;
  // readonly etiquetas: Etiqueta[];
  // readonly movimentacoes: RegistroMovimentacoes[];
  // readonly operador_logistico: OperadorLogistico;
  // readonly usuario: Usuario;
}
