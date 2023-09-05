import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";
import { NivelFormacion } from "src/nivel-formacion/schema/nivel-formacion.schema";

@Schema({timestamps: true})
export class Program{
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
        required: true,
        type: mongoose.Schema.Types.ObjectId
    })
    nivel: string
}

export const ProgramModel = SchemaFactory.createForClass(Program)