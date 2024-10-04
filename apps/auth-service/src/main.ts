/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  // Start the HTTP server for GraphQL
  const app = await NestFactory.create(AppModule);

  // Listen on the desired port and address
  await app.listen(3000, '0.0.0.0');
  console.log('Auth Service GraphQL is running on http://localhost:3000/graphql');
}


bootstrap();
