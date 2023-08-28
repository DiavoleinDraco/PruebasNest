import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-login.dto';
import { Login } from 'src/schema/login.schema';
import * as nodemailer from 'nodemailer';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private loginModel: Model<Login>) {}

  findAll() {
    return this.loginModel.find();
  }

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
        pass: 'evulyntqlntnslae',
      },
    });

    const mailOptions = {
      from: 'ginzu200@gmail.com',
      to: 'pedro.paternina8@soy.sena.edu.co',
      subject: 'apocosi',
      text: "sag",
      html: `<body style="text-align: center">
      <table style="margin: 0 auto;">
          <tr>
              <td>
                  <img src="https://i.pinimg.com/474x/94/f7/c4/94f7c4d83a101be2f12a19561567c59a.jpg" style="max-width: 200px;">
              </td>
              <td>
                  <h1 style="font-family: Arial, sans-serif;">Servicio Nacional de Aprendizaje</h1>
              </td>
          </tr>
          <tr>
              <td></td>
              <td style="font-family: Arial, sans-serif;">
                  <p>Estimado usuario, para completar el proceso de registro en (nombre) es necesario confirmar
                  <br>tu dirección de correo electrónico institucional. Para ello, haz clic en el siguiente enlace:</p>
                  <p><a href="clic">Enlace de Confirmación</a></p>
                  <p>Una vez realizada la confirmación podrás acceder a todas las funciones y características de
                  <br>nuestra plataforma.</p>
                  <p>Si no has realizado este registro, por favor ignora este correo.</p>
                  <p>¡Es un placer tenerte como parte de nuestra comunidad!</p>
                  <p>Atentamente,
                  <br>Equipo de Bienestar.</p>
              </td>
          </tr>
      </table>
  </body>`,
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
