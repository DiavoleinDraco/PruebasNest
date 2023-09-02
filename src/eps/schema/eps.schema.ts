import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Afiliacion } from "src/afiliacion/schema/afiliacion.schema";

@Schema({
    timestamps: true
})

export class eps{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    nombre: string;

    @Prop({
        required: true,
        trim: true
    })
    tipo: string;
    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref: 'Afiliacion'
    })
    afiliacion: Afiliacion
}


export const EpsSchema = SchemaFactory.createForClass(eps)