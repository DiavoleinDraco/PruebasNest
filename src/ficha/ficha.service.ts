import { Injectable, UploadedFile } from '@nestjs/common';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import * as xlsx from 'xlsx'
import { Ficha } from './schema/ficha.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Program } from 'src/programa/schema/programa.schema';

@Injectable()
export class FichaService {
  constructor(@InjectModel(Ficha.name) private fichaModel: Model<Ficha>,
              @InjectModel(Program.name) private programaModel: Model<Program>){}

 async create(@UploadedFile() fileBuffer: Buffer) {
  
    try {
      const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(sheet);
      
      const idPrograma = await this.programaModel.find()
      for (const item of jsonData) {
        for (const id of idPrograma) {
            if (
                item["__EMPTY_10"] != undefined &&
                item["__EMPTY_11"] != undefined &&
                item["__EMPTY_12"] != undefined &&
                item["__EMPTY_10"] != "FICHA" &&
                item["__EMPTY_11"] != "FECHA_INICIO_FICHA" &&
                item["__EMPTY_12"] != "FECHA_FIN_FICHA"
            ) {
                const nuevo = new this.fichaModel({
                    "codigo": item["__EMPTY_10"],
                    "programa": id._id,
                    "fecha_inicio": item["__EMPTY_11"],
                    "fecha_fin": item["__EMPTY_12"]
                });
                await nuevo.save();
            }  
      }
      }
     
    return(jsonData)
      } catch (error) {
        return `Error al procesar el archivo: ${error.message}`;
      }
    }

  findAll() {
    return `This action returns all ficha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ficha`;
  }

  update(id: number, updateFichaDto: UpdateFichaDto) {
    return `This action updates a #${id} ficha`;
  }

  remove(id: number) {
    return `This action removes a #${id} ficha`;
  }
}
