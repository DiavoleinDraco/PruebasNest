import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { Programa, ProgramaModel } from './schema/excel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Programa.name,
        schema: ProgramaModel,
      },
    ]),
  ],
  controllers: [ExcelController],
  providers: [ExcelService],
})
export class ExcelModule {}
