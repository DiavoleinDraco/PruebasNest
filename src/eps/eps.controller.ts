import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EpsService } from './eps.service';
import { CreateEpDto } from './dto/create-ep.dto';


@Controller('eps')
export class EpsController {
  constructor(private readonly epsService: EpsService) {}

  @Post()
  create(@Body() createEpDto: CreateEpDto) {
    return this.epsService.create(createEpDto);
  }
}
