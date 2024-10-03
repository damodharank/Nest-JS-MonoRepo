1.

# Create a workspace using the following command:

npx create-nx-workspace@latest ddtup
or
npx create-nx-workspace@latest ddtup --preset=nest 2)

# To run your NestJS project,

npx nx serve ddtup

3.

# To create a new user-service microservice in your current Nx workspace,

npx nx generate @nrwl/nest:application user-service

apps/
├── ddtup/ # Main API app
├── user-service/ # Newly created user-service microservice

4.

# To run the newly created user-service, use the following command:

npx nx serve user-service

5.

# Create a Shared Library for Reusable Code

npx nx g @nrwl/nest:library common
npx nx g @nrwl/nest:library dto

6.

# Create a Shared config Library for Centralized Configuration

npx nx g @nrwl/nest:library config

7.

# Create an API Gateway Application

npx nx g @nrwl/nest:application api-gateway

choose : Root: apps/api-gateway

8. Configure API Gateway to Route to user-service

- npm install @nestjs/microservices

==================================
Code Level
==================================

Step 1: Create a Shared Library for Reusable Code
npx nx g @nrwl/nest:library common

---

Step 2: Add a Shared dto Library for Data Transfer Objects
npx nx g @nrwl/nest:library dto

---

Step 3: Create a Shared config Library for Centralized Configuration
npx nx g @nrwl/nest:library config

---

Step 4: Create an API Gateway Application
npx nx g @nrwl/nest:application api-gateway

---

Step 5: Configure API Gateway to Route to user-service
npm install @nestjs/microservices
--
Step 6: Set Up the api-gateway to Connect with user-service
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
// Create the API Gateway application
const app = await NestFactory.create(AppModule);

// Set up the Microservice to communicate with `user-service`
app.connectMicroservice<MicroserviceOptions>({
transport: Transport.TCP,
options: { host: '127.0.0.1', port: 4001 },
});

await app.startAllMicroservicesAsync();
await app.listen(3000);
console.log('API Gateway is running on http://localhost:3000');
}
bootstrap();

# ---

Step 7: Fix the Method Name in main.ts
await app.startAllMicroservices();

npx nx serve api-gateway

# ---

Step 8: Create a Route in api-gateway to Call user-service

- apps/api-gateway/src/app.controller.ts
  import { Controller, Get, Inject } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
constructor(
@Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy
) {}

@Get()
getHello() {
return { message: 'Hello API Gateway' };
}

@Get('user')
getUserData() {
return this.userServiceClient.send({ cmd: 'get-user' }, {});
}
}

Update the app.module.ts file (apps/api-gateway/src/app.module.ts):
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
imports: [
ClientsModule.register([
{
name: 'USER_SERVICE',
transport: Transport.TCP,
options: {
host: '127.0.0.1',
port: 4001,
},
},
]),
],
controllers: [AppController],
})
export class AppModule {}

# ---

Step 9: Update user-service to Handle the Command
Open the apps/user-service/src/app.service.ts file.
getUser(): any {
return { userId: 1, name: 'John Doe', role: 'Admin' };
}

apps/user-service/src/app.controller.ts
@MessagePattern({ cmd: 'get-user' })
getUserData(): any {
return this.appService.getUser();
}

===================================
ADD Micro services

1. Add Micro service using cmd
2. connect to api gateway apps/api-gateway/src/app.module.ts file:
3. Add a Route for new service created apps/api-gateway/src/app.controller.ts
4. write functions in apps/notification-service/src/app.controller.ts
5. change the port for the new service
6. restart / serve the new service and restart the api service
7. Verify the service response from the apigateway URL
