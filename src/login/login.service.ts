import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-login.dto';
import { Login } from 'src/schema/login.schema';
import * as nodemailer from 'nodemailer';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private loginModel: Model<Login>) {}

  /*indAll() {
    return this.loginModel.find();
  }*/

  async create(createUser: CreateUserDto) {
    const newUser = new this.loginModel(createUser);
    return newUser.save();
  }

  async findOne(id: string) {
    return this.loginModel.findById(id);
  }

  async delete(id: string) {
    return this.loginModel.findByIdAndDelete(id);
  }

  async sendConfirmationEmail(): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ginzu200@gmail.com',
        pass: 'gyezkrbrtpsaopng',
      },
    });

    const mailOptions = {
      from: 'ginzu200@gmail.com',
      to: 'ginzu200@gmail.com',
      subject: 'Hola hermosa',
      text: 'lo logre :)',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
      } else {
        console.log('Correo enviado:', info.response);
      }
    });
  }
}
