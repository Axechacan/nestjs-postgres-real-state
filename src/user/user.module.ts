import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { CustomerclearService } from './customerclear/customerclear.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CustomerModule],
  providers: [CustomerclearService],
})
export class UserModule {}
