import { House } from 'src/house/house.entity';
import { Column, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export abstract class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
