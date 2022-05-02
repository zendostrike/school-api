import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { WebinarService } from '../services/webinar.service';

import { CreateWebinarDto } from '../dto/create-webinar.dto';
import { UpdateWebinarDto } from '../dto/update-webinar.dto';

@Controller('webinar')
export class WebinarController {
  constructor(private readonly webinarService: WebinarService) {}

  @Post()
  create(@Body() createWebinarDto: CreateWebinarDto) {
    return this.webinarService.create(createWebinarDto);
  }

  @Get()
  findAll() {
    return this.webinarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webinarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebinarDto: UpdateWebinarDto) {
    return this.webinarService.update(+id, updateWebinarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webinarService.remove(+id);
  }
}
