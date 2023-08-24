import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/login'), LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
