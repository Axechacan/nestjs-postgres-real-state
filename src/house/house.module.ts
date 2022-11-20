import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './house.entity';
import { PhotoModule } from './photo/photo.module';
import { PhotoController } from './photo/photo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([House]), PhotoModule],
  providers: [HouseService],
  controllers: [HouseController, PhotoController],
})
export class HouseModule {}
