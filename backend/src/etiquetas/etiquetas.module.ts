import { Module } from '@nestjs/common';
import { EtiquetasService } from './etiquetas.service';
import { EtiquetasController } from './etiquetas.controller';
import { Etiqueta } from './entities/etiqueta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pacote } from '../pacotes/entities/pacote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etiqueta, Pacote])],
  controllers: [EtiquetasController],
  providers: [EtiquetasService]
})
export class EtiquetasModule {}
