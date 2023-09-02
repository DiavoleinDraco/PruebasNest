import { Injectable } from '@nestjs/common';
import { CreateAfiliacionDto } from './dto/create-afiliacion.dto';
import { UpdateAfiliacionDto } from './dto/update-afiliacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Afiliacion } from './schema/afiliacion.schema';
import { Model } from 'mongoose';

@Injectable()
export class AfiliacionService {
  constructor(@InjectModel(Afiliacion.name) private afiliacionModel: Model<Afiliacion>) {}
  
  create(createAfiliacionDto: CreateAfiliacionDto) {

    const newUser = new this.afiliacionModel(createAfiliacionDto);
    return newUser.save();
  }

  findAll() {
    return `This action returns all afiliacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} afiliacion`;
  }

  update(id: number, updateAfiliacionDto: UpdateAfiliacionDto) {
    return `This action updates a #${id} afiliacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} afiliacion`;
  }
}
