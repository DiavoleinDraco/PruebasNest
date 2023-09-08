import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EpsService } from './eps.service';
import { CreateEpDto } from './dto/create-ep.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('eps')
export class EpsController {
  constructor(private readonly epsService: EpsService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
 async update(@UploadedFile() file) {
    if (!file) {
      return 'No se proporcionó ningún archivo.';
    }
    try {
      const jsonData = this.epsService.upload(file.buffer);
      return jsonData;
    } catch (error) {
      return `Error al procesar el archivo: ${error.message}`;
    }
  }

  @Post()
  create(@Body() createEpDto: CreateEpDto) {
    return this.epsService.create(createEpDto);
  }

  @Get()
  findAll() {
    return this.epsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epsService.remove(id);
  }
}
