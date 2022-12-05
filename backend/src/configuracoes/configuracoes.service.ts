import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateConfiguracoesDto } from './dto/create-configuracoes.dto';
import { UpdateConfiguracoesDto } from './dto/update-configuracoes.dto';
import { Configuracoes } from './entities/configuracoes.entity';
import { IConfiguracoes } from './interfaces/configuracoes.interface';

@Injectable()
export class ConfiguracoesService {
  private readonly nameof = 'Configuracoes';
  constructor(
    @InjectRepository(Configuracoes)
    private readonly repository: Repository<Configuracoes>
  ) {}

  public async create(dto: CreateConfiguracoesDto): Promise<IConfiguracoes> {
    try {
      return await this.repository.save(dto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async findAll(): Promise<Configuracoes[]> {
    return await this.repository.find();
  }

  public async findOne(id: string): Promise<Configuracoes> {
    const entity = await this.repository.findOneBy({ id: id });

    if (!entity)
      throw new NotFoundException(`${this.nameof} #${id} não encontrado`);

    return entity;
  }

  public async update(
    id: string,
    dto: UpdateConfiguracoesDto
  ): Promise<UpdateResult> {
    try {
      const entity = await this.repository.update({ id: id }, { ...dto });

      if (!entity)
        throw new NotFoundException(`${this.nameof} #${id} não existe`);

      return entity;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async remove(id: string) {
    const entity = await this.findOne(id);
    await this.repository.remove(entity);
  }
}
