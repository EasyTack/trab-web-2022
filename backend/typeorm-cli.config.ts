import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Pacote } from 'src/pacotes/entities/pacote.entity';
import { Etiqueta } from 'src/etiquetas/entities/etiqueta.entity';
import { Configuracoes } from 'src/configuracoes/entities/configuracoes.entity';
import { RegistroMovimentacoes } from 'src/registro-movimentacoes/entities/registro-movimentacoes.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get<string>('TYPEORM_HOST'),
  port: configService.get<number>('TYPEORM_PORT'),
  username: configService.get<string>('TYPEORM_USERNAME'),
  password: configService.get<string>('TYPEORM_PASSWORD'),
  database: configService.get<string>('TYPEORM_DATABASE'),
  entities: [Usuario, Configuracoes, Pacote, Etiqueta, RegistroMovimentacoes],
  migrations: [],
});
