import { Customer } from 'src/user/customer/customer.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo/photo.entity';

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  price: number;

  @OneToMany(() => Photo, (photo) => photo.house, { cascade: ['insert'] })
  @JoinColumn({ name: 'house_id' })
  photos: Photo[];

  @ManyToOne(() => Customer, (customer) => customer.houses)
  customer: Customer;
}
