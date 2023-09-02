import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Programa{
    @Prop({
        required: true
    })
    codigo: string
    @Prop({
        required: true
    })
    version: string
    @Prop({
        required: true
    })
    nombre: string
    @Prop({
        required: true
    })
    nivel: string
    @Prop({
        required: true
    })
    fecha_i: string
    @Prop({
        required: true
    })
    fecha_fin: string
}

export const ProgramaModel = SchemaFactory.createForClass(Programa)