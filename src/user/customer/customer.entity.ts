import { House } from 'src/house/house.entity';
import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../user.entity';

@Entity()
export class Customer extends User {
  @OneToMany(() => House, (house) => house.customer)
  @JoinColumn({ name: 'customer_id' })
  houses: House[];
}
