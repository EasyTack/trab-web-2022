import { PartialType } from '@nestjs/swagger';
import { CreateOperadoresLogisticosDto } from './create-operadores-logisticos.dto';

export class UpdateOperadoresLogisticosDto extends PartialType(
  CreateOperadoresLogisticosDto
) {}
