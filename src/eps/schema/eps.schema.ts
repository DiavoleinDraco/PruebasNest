import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
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
}


export const EpsSchema = SchemaFactory.createForClass(eps)