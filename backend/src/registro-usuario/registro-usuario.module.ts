import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroUsuarioController } from './registro-usuario.controller';
import { RegistroUsuarioService } from './registro-usuario.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), MailerModule],
  controllers: [RegistroUsuarioController],
  providers: [RegistroUsuarioService, UsuariosService]
})
export class RegistroUsuarioModule {}
