import { PartialType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class UsuarioUpdateDto extends PartialType(UsuarioDto) {}
