import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000); // Change the port to 4000
  Logger.log('🚀 API Gateway is running at http://localhost:4000/graphql');
}

bootstrap();
