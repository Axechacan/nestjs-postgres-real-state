import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { House } from '../house.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  url: string;
  @ManyToOne(() => House, (house) => house.photos)
  house: House;
}
