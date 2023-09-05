import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({
    timestamps: true
})

export class Ficha{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    codigo: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Programa', unique: true, required: true, trim: true})
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

export const FichaSchema = SchemaFactory.createForClass(Ficha)