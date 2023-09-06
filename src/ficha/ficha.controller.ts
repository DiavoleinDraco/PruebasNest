import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FichaService } from './ficha.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ficha')
export class FichaController {
  constructor(private readonly fichaService: FichaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
 async create(@UploadedFile() file) {
    if (!file) {
      return 'No se proporcionó ningún archivo.';
    }

    try {
      const jsonData = this.fichaService.create(file.buffer);

      return jsonData;
    } catch (error) {
      return `Error al procesar el archivo: ${error.message}`;
    }
  }

  @Get()
  findAll() {
    return this.fichaService.findAll();
  }
  
  @Get(':id')
  async obtenerFichaConProgramaYNivel(@Param('id') fichaId: string) {
    try {
      const ficha = await this.fichaService.obtenerFichaConProgramaYNivel(fichaId);
      return ficha;
    } catch (error) {
      throw new Error(`Error al obtener la ficha: ${error.message}`);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaDto: UpdateFichaDto) {
    return this.fichaService.update(+id, updateFichaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaService.remove(+id);
  }
}
