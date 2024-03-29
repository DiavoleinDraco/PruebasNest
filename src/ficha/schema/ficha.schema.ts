import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Program } from "src/programa/schema/programa.schema";


@Schema({
    timestamps: true
})

export class Fichas{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    codigo: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Program.name, unique: false, required: true, trim: true})
    programa: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Jornada',required: false, trim: true})
    jornada: string 
    
    @Prop({
        unique: false,
        required: false,
        trim: true,
    })
    fecha_inicio?: string;

    @Prop({
        unique: false,
        required: false,
        trim: true,
    })
    fecha_fin?: string;
}

export const FichaSchema = SchemaFactory.createForClass(Fichas)