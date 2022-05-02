import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Enrollment } from 'src/enrollment/entities/enrollment.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionId: string;

  @Column()
  amount: number;

  @Column()
  orderId: string;

  @Column()
  status: string;

  @ManyToOne(() => Enrollment, (enrollment) => enrollment.transactions)
  enrollment: Enrollment;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
