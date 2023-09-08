import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Dominio {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  nombre: string;
}

export const DominioSchema = SchemaFactory.createForClass(Dominio);
