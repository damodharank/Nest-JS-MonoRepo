import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  getUser(): string {
    return 'Hello from User Service GraphQL!';
  }
}
