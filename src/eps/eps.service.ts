import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEpDto } from './dto/create-ep.dto';
import { InjectModel } from '@nestjs/mongoose';
import { eps } from './schema/eps.schema';
import { Model, Types } from 'mongoose';
import { MENSAJES_ERROR, MENSAJES_OK } from 'src/StringValues';


@Injectable()
export class EpsService {
  constructor(@InjectModel(eps.name) private epsModel: Model<eps>){}

  async create(epsD: CreateEpDto) {
    const newRol = new this.epsModel(epsD);
    await newRol.save();

    
  }

  async remove(id: string) {
    try {
      const objId = new Types.ObjectId(id);
      const found = (await this.epsModel.findOne({ _id: objId })).populate('nombre','',this.epsModel);
      if (!found) {
        throw new HttpException(
          MENSAJES_ERROR.ROL_NO_EXISTE,
          HttpStatus.NOT_FOUND,
        );
      }
      await this.epsModel.findByIdAndDelete(id);
      return new HttpException(MENSAJES_OK.ROL_ELIMINADO, HttpStatus.ACCEPTED);
    } catch (error) {
      throw new HttpException(
        MENSAJES_ERROR.ID_ROL_NO_VALIDO,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
  
  /*
  findAll() {
    return this.epsModel.find();
  }
  
 

  
  */
}

