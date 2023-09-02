import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AfiliacionService } from './afiliacion.service';
import { CreateAfiliacionDto } from './dto/create-afiliacion.dto';
import { UpdateAfiliacionDto } from './dto/update-afiliacion.dto';

@Controller('afiliacion')
export class AfiliacionController {
  constructor(private readonly afiliacionService: AfiliacionService) {}

  @Post()
  create(@Body() createAfiliacionDto: CreateAfiliacionDto) {
    return this.afiliacionService.create(createAfiliacionDto);
  }

  @Get()
  findAll() {
    return this.afiliacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.afiliacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAfiliacionDto: UpdateAfiliacionDto) {
    return this.afiliacionService.update(+id, updateAfiliacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.afiliacionService.remove(+id);
  }
}
