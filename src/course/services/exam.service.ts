import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';

import { Exam } from '../entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) {}

  create(createExamDto: CreateExamDto) {
    const exam = this.examRepository.create({
      ...createExamDto,
      lesson: { id: createExamDto.lessonId },
    });

    return this.examRepository.save(exam);
  }

  findAll() {
    return this.examRepository.find();
  }

  findOne(id: number) {
    return this.examRepository.findOne(id, {
      relations: ['lesson'],
    });
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examRepository.delete(id);
  }
}
