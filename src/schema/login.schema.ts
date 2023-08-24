import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Login {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  nombres: string;

  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  correo: string;

  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  contraseña: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
