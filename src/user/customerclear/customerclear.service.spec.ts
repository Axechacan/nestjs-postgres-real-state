import { Test, TestingModule } from '@nestjs/testing';
import { CustomerclearService } from './customerclear.service';

describe('CustomerclearService', () => {
  let service: CustomerclearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerclearService],
    }).compile();

    service = module.get<CustomerclearService>(CustomerclearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
