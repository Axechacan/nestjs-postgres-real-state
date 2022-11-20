import {
  Column,
  Entity,
  JoinColumn,
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
}
