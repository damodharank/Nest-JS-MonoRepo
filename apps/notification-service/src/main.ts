import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create the microservice
  const microserviceApp = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4003,
    },
  });

  microserviceApp.listen();
  console.log('Notification Service is listening on TCP port 4003');

  // Create an HTTP application for GraphQL
  const httpApp = await NestFactory.create(AppModule);
  await httpApp.listen(3333, '0.0.0.0');  // Use 0.0.0.0 instead of localhost
  console.log('Notification Service GraphQL is running on http://localhost:3333/graphql');
}

bootstrap();
