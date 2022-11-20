import { Body, Controller, Post } from '@nestjs/common';
import { get } from 'http';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() customer: CreateCustomerDto) {
    return this.customerService.createCustomer(customer);
  }
}
