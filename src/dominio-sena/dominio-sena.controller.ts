import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DominioSenaService } from './dominio-sena.service';
import { CreateDominioSenaDto } from './dto/create-dominio-sena.dto';

@Controller('dominio-sena')
export class DominioSenaController {
  constructor(private readonly dominioSenaService: DominioSenaService) {}

  @Post()
  create(@Body() createDominioSenaDto: CreateDominioSenaDto) {
    return this.dominioSenaService.create(createDominioSenaDto);
  }

  @Get()
  findAll() {
    return this.dominioSenaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dominioSenaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dominioSenaService.remove(+id);
  }
}
