import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from './house.entity';
import { PhotoService } from './photo/photo.service';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
    private photoService: PhotoService,
  ) {}

  getAll() {
    return this.houseRepository.find({ relations: { photos: true } });
  }

  getHouse(id: number) {
    return this.houseRepository.findOne({
      where: { id },
      relations: { photos: true },
    });
  }

  async createHouse(body: any) {
    const newHouse = this.houseRepository.create(body);
    return this.houseRepository.save(newHouse);
  }
}
