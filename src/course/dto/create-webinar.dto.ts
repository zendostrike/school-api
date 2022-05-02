import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWebinarDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;
}
