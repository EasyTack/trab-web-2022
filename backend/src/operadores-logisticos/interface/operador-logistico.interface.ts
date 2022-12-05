import { Pacote } from "../../pacotes/entities/pacote.entity";

export interface IOperadorLogistico {
  readonly documento: string;
  readonly razao_social: string;
  readonly nome_fantasia: string;
  // readonly pacotes: Pacote[];
}
