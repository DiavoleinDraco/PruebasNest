import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, LoginSchema } from 'src/schema/login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Login.name,
        schema: LoginSchema,
      },
    ]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
