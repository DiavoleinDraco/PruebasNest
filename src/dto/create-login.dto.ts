import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombres: string;
  @IsNotEmpty()
  @IsString()
  correo: string;
  @IsNotEmpty()
  @IsString()
  contraseña: string;
}
