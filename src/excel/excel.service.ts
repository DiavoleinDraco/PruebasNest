import { Injectable, UploadedFile } from '@nestjs/common';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import * as xlsx from 'xlsx'
import { InjectModel } from '@nestjs/mongoose';
import { Programa } from './schema/excel.schema';
import { Model } from 'mongoose';
@Injectable()
export class ExcelService {
  constructor(@InjectModel(Programa.name) private programaModel: Model<Programa>){} 

   async uploadFile(@UploadedFile() fileBuffer: Buffer) {

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
        item["__EMPTY_6"] == "64f5bfd7dc9c38d0c5434822"
      } else{
        item["__EMPTY_6"] == "64f5bf51dc9c38d0c543481c"
      }
      if(item["__EMPTY_10"] != undefined){
        const nuevo = new this.programaModel({
          "codigo": item["__EMPTY_10"],
          "version": item["__EMPTY_4"],
          "nombre": item["__EMPTY_5"],
          "nivel": item["__EMPTY_6"],
          "fecha_i": item["__EMPTY_11"],
          "fecha_fin": item["__EMPTY_12"]
        })
        await nuevo.save()
        
      }

      }
    return(jsonData)
      } catch (error) {
        return `Error al procesar el archivo: ${error.message}`;
      }
    }

  findAll(){
    return this.programaModel.find();
  }
}
