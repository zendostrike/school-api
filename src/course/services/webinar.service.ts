import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateWebinarDto } from '../dto/create-webinar.dto';
import { UpdateWebinarDto } from '../dto/update-webinar.dto';

import { Webinar } from '../entities/webinar.entity';

@Injectable()
export class WebinarService {
  constructor(
    @InjectRepository(Webinar)
    private webinarRepository: Repository<Webinar>,
  ) {}

  create(createWebinarDto: CreateWebinarDto) {
    return this.webinarRepository.save(createWebinarDto);
  }

  findAll() {
    return this.webinarRepository.find();
  }

  findOne(id: number) {
    return this.webinarRepository.findOne(id, {
      relations: ['course', 'exam', 'appointment'],
    });
  }

  update(id: number, updateWebinarDto: UpdateWebinarDto) {
    return this.webinarRepository.update(id, updateWebinarDto);
  }

  remove(id: number) {
    return this.webinarRepository.delete(id);
  }
}
