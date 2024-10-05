import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRouteInput } from './dto/create-route.input';
import { Route } from './route.model';
import { AppService } from './app.service';

@Resolver()
export class AppResolver  {
  constructor(private readonly appService: AppService) {}

  @Query(() => [Route])
  async getRouteData(): Promise<Route[]> {
    return this.appService.getRoutes();
  }

  @Mutation(() => Route)
  async createRouteData(@Args('createRouteInput') createRouteInput: CreateRouteInput): Promise<Route> {
    return this.appService.createRoute(createRouteInput);
  }

}
