import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegistroMovimentacoeDto } from './dto/create-registro-movimentacoe.dto';
import { UpdateRegistroMovimentacoeDto } from './dto/update-registro-movimentacoe.dto';
import { RegistroMovimentacoes } from './entities/registro-movimentacoes.entity';
import { IRegistroMovimentacoes } from './interfaces/registro-movimentacoes.interface';

@Injectable()
export class RegistroMovimentacoesService {
  private readonly nameof = 'RegistroMovimentacao';
  constructor(
    @InjectRepository(RegistroMovimentacoes)
    private readonly repository: Repository<RegistroMovimentacoes>
  ) {}

  public async create(
    dto: CreateRegistroMovimentacoeDto
  ): Promise<IRegistroMovimentacoes> {
    try {
      return await this.repository.save(dto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async findAll(): Promise<RegistroMovimentacoes[]> {
    return await this.repository.find();
  }

  public async findOne(id: string): Promise<RegistroMovimentacoes> {
    const entity = await this.repository.findOneBy({ id: id });

    if (!entity)
      throw new NotFoundException(`${this.nameof} #${id} não encontrado`);

    return entity;
  }

  public async update(
    id: string,
    dto: UpdateRegistroMovimentacoeDto
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
