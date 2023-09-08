import { HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import { CreateEpDto } from './dto/create-ep.dto';
import { InjectModel } from '@nestjs/mongoose';
import { eps } from './schema/eps.schema';
import { Model, Types } from 'mongoose';
import { MENSAJES_ERROR, MENSAJES_OK } from 'src/StringValues';
import * as xlsx from 'xlsx'

@Injectable()
export class EpsService {
  constructor(@InjectModel(eps.name) private epsModel: Model<eps>){}


  async upload(@UploadedFile() fileBuffer: Buffer) {
    try {
      const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(sheet);
      for (const item of jsonData) {
         const nuevo = new this.epsModel({
           "nombre": item["ENTIDAD"],
           "tipo": item["RÉGIMEN"]
          });
          await nuevo.save();
            
          
      }
      return jsonData
      } catch (error) {
        return `Error al procesar el archivo: ${error.message}`;
      }
    }
  async create(epsD: CreateEpDto) {
    const found = await this.epsModel.findOne({
      $or: [{ nombre: epsD.nombre }, { tipo: epsD.tipo }],
    });
    if (found) {
      throw new HttpException(MENSAJES_ERROR.EPS_EXISTE, HttpStatus.CONFLICT);
    }
    const newRol = new this.epsModel(epsD);
    await newRol.save();
  }

  findAll() {
    return this.epsModel.find();
  }
  
 async findOne(id: number) {
    try {
      const objId = new Types.ObjectId(id);
      const found = await this.epsModel.findOne({ _id: objId });

      if (!found) {
        throw new HttpException(
          MENSAJES_ERROR.EPS_NO_EXISTE,
          HttpStatus.NOT_FOUND,
        );
      }
      return found;
    } catch (error) {
      throw new HttpException(
        MENSAJES_ERROR.ID_EPS_NO_VALIDO,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  async remove(id: string) {
    try {
      const objId = new Types.ObjectId(id);
      const found = await this.epsModel.findOne({ _id: objId });
      if (!found) {
        throw new HttpException(
          MENSAJES_ERROR.EPS_NO_EXISTE,
          HttpStatus.NOT_FOUND,
        );
      }
      await this.epsModel.findByIdAndDelete(id);
      return new HttpException(MENSAJES_OK.EPS_ELEIMINADO, HttpStatus.ACCEPTED);
    } catch (error) {
      throw new HttpException(
        MENSAJES_ERROR.ID_EPS_NO_VALIDO,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
}

