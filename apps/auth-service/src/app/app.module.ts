import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthResolver } from './auth/auth.resolver';
import { AuthService } from './auth/auth.service';

// Update the plugin import like this
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default');

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'apps/auth-service/src/graphql/auth-schema.gql'),
      playground: false,  // Disable the default GraphQL Playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()],  // Use Apollo Studio Sandbox Plugin
    }),
  ],
  providers: [AuthResolver, AuthService],
})
export class AppModule {}
