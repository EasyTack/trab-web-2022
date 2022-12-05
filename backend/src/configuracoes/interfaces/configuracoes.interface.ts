import { Usuario } from "../../usuarios/entities/usuario.entity";


export interface IConfiguracoes {
  readonly update_automatico: boolean;
  readonly tipo_ordenacao_padrao: number;
  readonly intervalo_atualizacao: number;
  readonly horario_comercial_atualizacao: boolean;
  // readonly usuario: Usuario;
}
