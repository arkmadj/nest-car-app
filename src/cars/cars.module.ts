import { Module } from '@nestjs/common';
import { CarService } from './cars.resolver';

@Module({
  imports: [CarService],
  exports: [CarService],
})
export class CarModule {}
