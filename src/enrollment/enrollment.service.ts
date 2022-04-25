import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

import { Course } from 'src/course/entities/course.entity';
import { User } from 'src/user/entities/user.entity';

import { Enrollment } from './entities/enrollment.entity';
import { CourseService } from 'src/course/course.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    @Inject(CourseService)
    private readonly courseService: CourseService,
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    const student = await this.userService.findOne(createEnrollmentDto.userId);
    const course = await this.courseService.findOne(
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

  findByUserId(userId: number) {
    return this.enrollmentRepository.find({
      where: { user: { id: userId } },
      relations: ['course'],
    });
  }

  async update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    const student = await this.userService.findOne(updateEnrollmentDto.userId);
    const course = await this.courseService.findOne(
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
