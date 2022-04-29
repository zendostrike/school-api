import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LessonController } from './controllers/lesson.controller';
import { CourseController } from './controllers/course.controller';
import { ExamController } from './controllers/exam.controller';
import { AppointmentController } from './controllers/appointment.controller';

import { CourseService } from './services/course.service';
import { ExamService } from './services/exam.service';
import { LessonService } from './services/lesson.service';
import { AppointmentService } from './services/appointment.service';

import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';
import { Exam } from './entities/exam.entity';
import { Appointment } from './entities/appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Lesson, Exam, Appointment])],
  controllers: [
    CourseController,
    ExamController,
    LessonController,
    AppointmentController,
  ],
  providers: [CourseService, ExamService, LessonService, AppointmentService],
  exports: [CourseService],
})
export class CourseModule {}
