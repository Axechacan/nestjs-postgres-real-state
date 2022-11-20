import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/createCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  createCustomer(customer: CreateCustomerDto) {
    let newCustomer = this.customerRepository.create(customer);
    return this.customerRepository.save(newCustomer);
  }
}
