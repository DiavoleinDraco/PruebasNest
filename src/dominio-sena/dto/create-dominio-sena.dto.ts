import { IsNotEmpty, IsString } from "class-validator"

export class CreateDominioSenaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
