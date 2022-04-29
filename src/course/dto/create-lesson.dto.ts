import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly videoUrl?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly courseId: number;

  @IsOptional()
  @IsNumber()
  readonly appointmentId: number;

  @IsOptional()
  @IsNumber()
  readonly examId: number;

  @IsOptional()
  @IsBoolean()
  readonly isPublished: boolean;
}
