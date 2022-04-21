import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './course.service';

import { CourseController } from './course.controller';

import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [TypeOrmModule],
})
export class CourseModule {}
