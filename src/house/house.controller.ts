import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HouseService } from './house.service';

@Controller('houses')
export class HouseController {
  constructor(private houseService: HouseService) {}

  @Get()
  findAll() {
    return this.houseService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.houseService.getHouse(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.houseService.createHouse(body);
  }

  /*     @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
      return body;
    }
  
    @Delete(':id')
    delete(@Param('id') id: number) {
      return true;
    } */
}
