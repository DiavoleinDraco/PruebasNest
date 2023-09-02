import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEpDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
