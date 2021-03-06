import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseModule } from 'src/course/course.module';
import { UserModule } from 'src/user/user.module';

import { EnrollmentService } from './enrollment.service';

import { EnrollmentController } from './enrollment.controller';

import { Enrollment } from './entities/enrollment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    CourseModule,
    forwardRef(() => UserModule),
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
