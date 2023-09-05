import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class NivelFormacion{
    @Prop({
        unique: true,
        required: true,
        trim: true,
    })
    nombre: string;
}

export const NivelFormacionSchema = SchemaFactory.createForClass(NivelFormacion);