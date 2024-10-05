import { Injectable } from '@nestjs/common';
import { Route } from './route.model';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getRoutes(): Route[] {
    return [
      {
        id: '1',
        name: 'Route 1',
        location: 'Location 1',
        destination: 'Destination 1',
      },
      {
        id: '2',
        name: 'Route 2',
        location: 'Location 2',
        destination: 'Destination 2',
      },
    ];
  }

  createRoute(createRouteInput: any): Route {
    return {
      id: '3',
      name: createRouteInput.name,
      location: createRouteInput.location,
      destination: createRouteInput.destination,
    };
  }
}
