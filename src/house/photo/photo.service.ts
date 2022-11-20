import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  ) {}

  insertPhoto(photo, houseId) {
    let newPhoto = this.photoRepository.create(photo);
    return this.photoRepository.save(newPhoto);
  }
}
