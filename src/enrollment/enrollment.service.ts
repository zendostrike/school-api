import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

import { Course } from 'src/course/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    const student = await this.userRepository.findOne(
      createEnrollmentDto.userId,
    );
    const course = await this.courseRepository.findOne(
      createEnrollmentDto.courseId,
    );

    if (!student) {
      throw new NotFoundException(User, 'Student not found');
    }

    if (!course) {
      throw new NotFoundException(Course, 'Course not found');
    }

    const enrollment = new Enrollment();

    enrollment.user = student;
    enrollment.course = course;

    return this.enrollmentRepository.save(enrollment);
  }

  findAll() {
    return this.enrollmentRepository.find({
      relations: ['user', 'course'],
    });
  }

  findOne(id: number) {
    return this.enrollmentRepository.findOne({
      where: { id },
      relations: ['user', 'course'],
    });
  }

  async update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    const student = await this.userRepository.findOneOrFail(
      updateEnrollmentDto.userId,
    );
    const course = await this.courseRepository.findOneOrFail(
      updateEnrollmentDto.courseId,
    );

    const enrollment = new Enrollment();

    enrollment.user = student;
    enrollment.course = course;

    return this.enrollmentRepository.update(id, enrollment);
  }

  remove(id: number) {
    return this.enrollmentRepository.delete(id);
  }
}
