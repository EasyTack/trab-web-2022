import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { OperadoresLogisticosService } from './operadores-logisticos.service';
import { CreateOperadoresLogisticosDto } from './dto/create-operadores-logisticos.dto';
import { UpdateOperadoresLogisticosDto } from './dto/update-operadores-logisticos.dto';

@ApiTags('operadores-logisticos')
@UseGuards(AuthGuard('jwt'))
@Controller('operadores-logisticos')
export class OperadoresLogisticosController {
  constructor(
    private readonly operadoresLogisticosService: OperadoresLogisticosService
  ) {}

  @Post()
  create(@Body() createOperadoresLogisticosDto: CreateOperadoresLogisticosDto) {
    return this.operadoresLogisticosService.create(
      createOperadoresLogisticosDto
    );
  }

  @Get()
  findAll() {
    return this.operadoresLogisticosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operadoresLogisticosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperadoresLogisticosDto: UpdateOperadoresLogisticosDto
  ) {
    return this.operadoresLogisticosService.update(
      id,
      updateOperadoresLogisticosDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operadoresLogisticosService.remove(id);
  }
}
