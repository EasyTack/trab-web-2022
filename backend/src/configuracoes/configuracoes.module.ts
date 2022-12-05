import { Module } from '@nestjs/common';
import { ConfiguracoesService } from './configuracoes.service';
import { ConfiguracoesController } from './configuracoes.controller';
import { Configuracoes } from './entities/configuracoes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configuracoes, Usuario])],
  controllers: [ConfiguracoesController],
  providers: [ConfiguracoesService]
})
export class ConfiguracoesModule {}
