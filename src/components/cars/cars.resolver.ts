import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/cars';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation(returns => Car)
  public async car(): Promise<Car>{}

}
