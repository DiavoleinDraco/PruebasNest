import { IsNotEmpty, IsString } from 'class-validator'
export class CreateAfiliacionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string
}


