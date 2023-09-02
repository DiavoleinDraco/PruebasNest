import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import * as XLSX from 'xlsx';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    if (!file) {
      return 'No se proporcionó ningún archivo.';
    }

    try {
      // Utiliza el servicio para procesar el archivo Excel
      const jsonData = this.excelService.uploadFile(file.buffer);
      // Devuelve los datos JSON o realiza acciones adicionales
      return jsonData;
    } catch (error) {
      return `Error al procesar el archivo: ${error.message}`;
    }
  }

@Get()
prueba(){
  return this.excelService.findAll()
}
}