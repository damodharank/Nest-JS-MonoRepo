import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4001); // Change to port 4001
  Logger.log('🚀 Auth Service GraphQL is running at http://localhost:4001/graphql');
}

bootstrap();
