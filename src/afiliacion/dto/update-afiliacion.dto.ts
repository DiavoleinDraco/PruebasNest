import { PartialType } from '@nestjs/mapped-types';
import { CreateAfiliacionDto } from './create-afiliacion.dto';

export class UpdateAfiliacionDto extends PartialType(CreateAfiliacionDto) {}
