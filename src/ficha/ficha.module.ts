import { Module } from '@nestjs/common';
import { FichaService } from './ficha.service';
import { FichaController } from './ficha.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ficha, FichaSchema } from './schema/ficha.schema';
import { Program } from 'src/programa/schema/programa.schema';
import { ProgramaModel } from 'src/excel/schema/excel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ficha.name,
        schema: FichaSchema
      },
      {
        name: Program.name,
        schema: ProgramaModel
      }
    ])
  ],
  controllers: [FichaController],
  providers: [FichaService],
})
export class FichaModule {}
