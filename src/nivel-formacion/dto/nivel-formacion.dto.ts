import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNivelDTO{
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
}

export class UpdateNivelDTO{
    @IsString()
    @IsOptional()
    readonly nombre?: string;
}
