import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Appointment } from './appointment.entity';

import { Course } from './course.entity';
import { Exam } from './exam.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  videoUrl: string;

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;

  @OneToOne(() => Appointment, (appointment) => appointment.lesson)
  appointment: Appointment;

  @OneToOne(() => Exam, (exam) => exam.lesson)
  exam: Exam;

  @Column()
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
