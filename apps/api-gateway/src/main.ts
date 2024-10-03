/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.startAllMicroservices();
  await app.listen(3000);
  console.log('API Gateway is running on http://localhost:3000');
}

// async function bootstrap() {
//   // Create the API Gateway application
//   const app = await NestFactory.create(AppModule);

//   // Set up the Microservice to communicate with `user-service`
//   app.connectMicroservice<MicroserviceOptions>({
//     transport: Transport.TCP,
//     options: { host: '127.0.0.1', port: 4001 },
//   });

//   await app.startAllMicroservices();
//   // await app.listen(3000);
//   await app.listen(3000, () => {
//     console.log('API Gateway is running on http://localhost:3000');
//   });
//   console.log('API Gateway is running on http://localhost:3000');
// }


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }

bootstrap();
