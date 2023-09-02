import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class Afiliacion{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    nombre: string
}

export const AfiliacionSchema = SchemaFactory.createForClass(Afiliacion)