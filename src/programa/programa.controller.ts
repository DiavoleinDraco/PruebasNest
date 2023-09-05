import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('programas')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file) {
    if (!file) {
      return 'No se proporcionó ningún archivo.';
    }

    try {
      // Utiliza el servicio para procesar el archivo Excel
      const jsonData = this.programaService.create(file.buffer);
      // Devuelve los datos JSON o realiza acciones adicionales
      return jsonData;
    } catch (error) {
      return `Error al procesar el archivo: ${error.message}`;
    }
  }

  @Get()
  findAll() {
    return this.programaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programaService.update(+id, updateProgramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programaService.remove(+id);
  }
}
