import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOperadoresLogisticosDto } from './dto/create-operadores-logisticos.dto';
import { UpdateOperadoresLogisticosDto } from './dto/update-operadores-logisticos.dto';
import { IOperadorLogistico } from './interface/operador-logistico.interface';
import { OperadorLogistico } from './entities/operador-logistico.entity';

@Injectable()
export class OperadoresLogisticosService {
  private readonly nameof = 'OperadoresLogisticos';
  constructor(
    @InjectRepository(OperadorLogistico)
    private readonly repository: Repository<OperadorLogistico>
  ) {}

  public async create(
    dto: CreateOperadoresLogisticosDto
  ): Promise<IOperadorLogistico> {
    try {
      return await this.repository.save(dto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async findAll(): Promise<OperadorLogistico[]> {
    return await this.repository.find();
  }

  public async findOne(id: string): Promise<OperadorLogistico> {
    const entity = await this.repository.findOneBy({ id: id });

    if (!entity)
      throw new NotFoundException(`${this.nameof} #${id} não encontrado`);

    return entity;
  }

  public async update(
    id: string,
    dto: UpdateOperadoresLogisticosDto
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
