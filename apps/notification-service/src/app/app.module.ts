import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationResolver } from './notification/notification.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // Add the required driver option here
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/notification-service/src/graphql/notification.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, NotificationResolver],
})
export class AppModule {}
