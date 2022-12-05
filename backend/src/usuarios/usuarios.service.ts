import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { IUsuario } from './interfaces/usuario.interface';
import { UsuarioDto } from './dto/usuario.dto';
import * as bcrypt from 'bcrypt';
import { UsuarioProfileDto } from './dto/usuario-profile.dto';
import { UsuarioUpdateDto } from './dto/usuario-update.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {}

  public async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  public async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        email: email
      }
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario ${email} não encontraod`);
    }

    return usuario;
  }

  public async findById(userId: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({
      id: userId
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario #${userId} não encontrado`);
    }

    return usuario;
  }

  public async create(userDto: UsuarioDto): Promise<IUsuario> {
    try {
      return await this.usuarioRepository.save(userDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateByEmail(email: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ email: email });
      usuario.senha = bcrypt.hashSync(Math.random().toString(36).slice(-8), 8);

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateByPassword(
    email: string,
    senha: string
  ): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ email: email });
      usuario.senha = bcrypt.hashSync(senha, 8);

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateProfileUser(
    id: string,
    userProfileDto: UsuarioProfileDto
  ): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ id: id });
      usuario.nome = userProfileDto.nome;
      usuario.sobrenome = userProfileDto.sobrenome;
      usuario.documento = userProfileDto.documento;
      usuario.email = userProfileDto.email;
      usuario.usuario = userProfileDto.usuario;

      return await this.usuarioRepository.save(usuario);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async updateUser(
    id: string,
    userUpdateDto: UsuarioUpdateDto
  ): Promise<UpdateResult> {
    try {
      const usuario = await this.usuarioRepository.update(
        {
          id: id
        },
        { ...userUpdateDto }
      );

      if (!usuario) {
        throw new NotFoundException(`Usuario #${id} não existe`);
      }

      return usuario;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async deleteUser(id: string): Promise<void> {
    const usuario = await this.findById(id);
    await this.usuarioRepository.remove(usuario);
  }
}
