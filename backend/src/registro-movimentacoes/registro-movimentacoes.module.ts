import { Module } from '@nestjs/common';
import { RegistroMovimentacoesService } from './registro-movimentacoes.service';
import { RegistroMovimentacoesController } from './registro-movimentacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroMovimentacoes } from './entities/registro-movimentacoes.entity';
import { Pacote } from '../pacotes/entities/pacote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroMovimentacoes, Pacote])],
  controllers: [RegistroMovimentacoesController],
  providers: [RegistroMovimentacoesService]
})
export class RegistroMovimentacoesModule {}
