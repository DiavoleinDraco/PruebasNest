import { Injectable, UploadedFile } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import * as xlsx from 'xlsx'
import { InjectModel } from '@nestjs/mongoose';
import { Program } from './schema/programa.schema';
import mongoose, { Model } from 'mongoose';
@Injectable()
export class ProgramaService {
  constructor(@InjectModel(Program.name) private programaModel: Model<Program>) {}
 async create(@UploadedFile() fileBuffer: Buffer) {

    try {
      const workbook = xlsx.read(fileBuffer, { type: 'buffer' });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = xlsx.utils.sheet_to_json(sheet);
      
    for (const item of jsonData){
      if(item["__EMPTY_6"] == "TÉCNICO"){
        item["__EMPTY_6"] = "64f5bf66dc9c38d0c543481f"
      } else if(item["__EMPTY_6"] == "AUXILIAR"){
        item["__EMPTY_6"] = "64f5bf3fdc9c38d0c5434819"
      } else if(item["__EMPTY_6"] == "TECNÓLOGO"){
        item["__EMPTY_6"] = "64f5bfd7dc9c38d0c5434822"
      } else{
        item["__EMPTY_6"] = "64f5bf51dc9c38d0c543481c"
      }
      if(item["__EMPTY_10"] != undefined && item["__EMPTY_4"] != undefined && item["__EMPTY_5"] != undefined && item["__EMPTY_6"] != undefined
      && item["__EMPTY_10"] != "FICHA" && item["__EMPTY_4"] != "VERSION_PROGRAMA" && item["__EMPTY_5"] != "PROGRAMA"){
        const nuevo = new this.programaModel({
          "codigo": item["__EMPTY_3"],
          "version": item["__EMPTY_4"],
          "nombre": item["__EMPTY_5"],
          "nivel": item["__EMPTY_6"]
        })
        await nuevo.save()
        
      }

      }
    return(jsonData)
      } catch (error) {
        return `Error al procesar el archivo: ${error.message}`;
      }
    }

  findAll() {
    return this.programaModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} programa`;
  }

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

  remove(id: number) {
    return `This action removes a #${id} programa`;
  }
}
