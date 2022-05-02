import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly meetingUrl: string;

  @IsNotEmpty()
  @Type(() => Date)
  readonly date: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly lessonId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly webinarId: number;
}
