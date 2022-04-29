import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    const appointment = this.appointmentRepository.create({
      ...createAppointmentDto,
      lesson: { id: createAppointmentDto.lessonId },
    });

    return this.appointmentRepository.save(appointment);
  }

  findAll() {
    return this.appointmentRepository.find();
  }

  findOne(id: number) {
    return this.appointmentRepository.findOne(id, {
      relations: ['lesson'],
    });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentRepository.update(id, updateAppointmentDto);
  }

  remove(id: number) {
    return this.appointmentRepository.delete(id);
  }
}
