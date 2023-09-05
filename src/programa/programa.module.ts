import { Module } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { ProgramaController } from './programa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Program, ProgramModel } from './schema/programa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Program.name,
        schema: ProgramModel
      }
    ])
  ],
  controllers: [ProgramaController],
  providers: [ProgramaService],
})
export class ProgramaModule {}
