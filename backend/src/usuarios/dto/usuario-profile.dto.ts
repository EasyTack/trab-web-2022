import { OmitType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class UsuarioProfileDto extends OmitType(UsuarioDto, [
  'senha'
] as const) {}
