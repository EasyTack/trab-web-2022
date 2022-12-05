import { Module } from '@nestjs/common';
import { MudaSenhaController } from './muda-senha.controller';
import { MudaSenhaService } from './muda-senha.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), MailerModule],
  controllers: [MudaSenhaController],
  providers: [MudaSenhaService, UsuariosService]
})
export class MudaSenhaModule {}
