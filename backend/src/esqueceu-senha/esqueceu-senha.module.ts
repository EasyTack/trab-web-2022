import { Module } from '@nestjs/common';
import { EsqueceuSenhaService } from './esqueceu-senha.service';
import { EsqueceuSenhaController } from './esqueceu-senha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { MailerModule } from '../mailer/mailer.module';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), MailerModule, UtilsModule],
  providers: [EsqueceuSenhaService, UsuariosService],
  controllers: [EsqueceuSenhaController]
})
export class EsqueceuSenhaModule {}
