import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AfiliacionModule } from './afiliacion/afiliacion.module';
import { EpsModule } from './eps/eps.module';

import { ExcelModule } from './excel/excel.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/login'), AfiliacionModule, EpsModule, ExcelModule,
    MulterModule.register({
      dest: './uploads', // Directorio donde se guardarán los archivos subidos
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
