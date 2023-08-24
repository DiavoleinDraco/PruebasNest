import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUserDto } from 'src/dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  findAll() {
    return this.loginService.sendConfirmationEmail();
  }

  @Get(':id')
  findOneById() {
    return 'Get one User';
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.loginService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.loginService.delete(id);
  }
}
