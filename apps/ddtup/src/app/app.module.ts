import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './tup/app.service';
import { AppResolver } from './tup/app.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'apps/ddtup/src/app/schema.gql'),
      playground: false, // Disable the old playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()], // Enable Apollo Studio Sandbox
    }),
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
