import express from 'express';
import { ApolloServer } from '@apollo/server';
import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'; // Proper named import

async function bootstrap() {
  const app = express();

  // Define the Apollo Gateway
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'ddtup', url: 'http://localhost:3000/graphql' },
        { name: 'auth-service', url: 'http://localhost:4001/graphql' },
      ],
      pollIntervalInMs: 30000,  // Poll interval to check for subgraph availability
    }),
    buildService({ name, url }) {
      return new RemoteGraphQLDataSource({
        url,
        willSendRequest({ request, context }) {
          console.log(`Sending request to ${name} service at ${url}`);
        },
        didEncounterError(error) {
          console.error(`Encountered error with ${name}: ${error.message}`);
        },
      });
    },
  });

  // Create the Apollo Server with Apollo Gateway
  const server = new ApolloServer({
    gateway,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault()], // Correct plugin call
  });

  // Start the Apollo Server
  await server.start();

  // Use Apollo middleware with Express
  app.use('/graphql', json(), expressMiddleware(server));

  // Start the Express server
  app.listen(4000, () => {
    console.log('🚀 Apollo Gateway is running at http://localhost:4000/graphql');
  });
}

bootstrap();
