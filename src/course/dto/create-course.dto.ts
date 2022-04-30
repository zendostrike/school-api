import {
  IsBoolean,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsJSON()
  readonly info?: string;

  @IsOptional()
  @IsString()
  readonly imageUrl?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsBoolean()
  readonly isPublished: boolean;
}
