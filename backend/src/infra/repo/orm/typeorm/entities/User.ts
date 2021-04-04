import {
  Entity, Column, CreateDateColumn, PrimaryGeneratedColumn
} from 'typeorm'

import { IUser } from '../../../../../modules/user/entities/User'

@Entity('user')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'phone_number', unique: true })
  phoneNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  about: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: string;
}
