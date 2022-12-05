import { Module } from '@nestjs/common';
import { OperadoresLogisticosService } from './operadores-logisticos.service';
import { OperadoresLogisticosController } from './operadores-logisticos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperadorLogistico } from './entities/operador-logistico.entity';
import { Pacote } from '../pacotes/entities/pacote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OperadorLogistico, Pacote])],
  controllers: [OperadoresLogisticosController],
  providers: [OperadoresLogisticosService]
})
export class OperadoresLogisticosModule {}
