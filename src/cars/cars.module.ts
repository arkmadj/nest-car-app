import { Module } from '@nestjs/common';
import { CarsService } from './cars.resolver';

@Module({
  imports: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
