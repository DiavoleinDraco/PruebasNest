import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ExcelModule } from './excel/excel.module';
import { MulterModule } from '@nestjs/platform-express';
import { NivelFormacionModule } from './nivel-formacion/nivel-formacion.module';
import { ProgramaModule } from './programa/programa.module';
import { FichaModule } from './ficha/ficha.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pedroluispaterninaargumedo101:78bw4IjqSd9qlwyo@cluster0.aqbv2nq.mongodb.net/?retryWrites=true&w=majority') ,NivelFormacionModule,ProgramaModule,
    MulterModule.register({
      dest: './uploads', // Directorio donde se guardarán los archivos subidos
    }),
    ProgramaModule,
    FichaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
