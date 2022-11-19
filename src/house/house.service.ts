import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from './house.entity';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}

  getAll() {
    this.houseRepository.find();
  }

  getHouse(id: number) {
    return this.houseRepository.findOne({ where: { id } });
  }

  createHouse(body: any) {
    const newHouse = this.houseRepository.create(body);
    return this.houseRepository.save(newHouse);
  }
}
