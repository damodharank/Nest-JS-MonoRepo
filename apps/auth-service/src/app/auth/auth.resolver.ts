import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Query')
export class AuthResolver {
  @Query(() => String)
  getAuthMessage(): string {
    return 'Hello from Auth Service Apollo Server!';
  }
}
