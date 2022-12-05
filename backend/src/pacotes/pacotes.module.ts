import { Module } from '@nestjs/common';
import { PacotesService } from './pacotes.service';
import { PacotesController } from './pacotes.controller';
import { Pacote } from './entities/pacote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etiqueta } from '../etiquetas/entities/etiqueta.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { OperadorLogistico } from '../operadores-logisticos/entities/operador-logistico.entity';
import { RegistroMovimentacoes } from '../registro-movimentacoes/entities/registro-movimentacoes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pacote,
      Etiqueta,
      Usuario,
      OperadorLogistico,
      RegistroMovimentacoes
    ])
  ],
  controllers: [PacotesController],
  providers: [PacotesService]
})
export class PacotesModule {}
