import { Module } from '@nestjs/common';
import { AfiliacionService } from './afiliacion.service';
import { AfiliacionController } from './afiliacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Afiliacion, AfiliacionSchema } from './schema/afiliacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Afiliacion.name,
        schema: AfiliacionSchema,
      }
    ]),
  ],
  controllers: [AfiliacionController],
  providers: [AfiliacionService],
})
export class AfiliacionModule {}
