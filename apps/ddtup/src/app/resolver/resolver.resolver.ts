import { Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver()
export class ResolverResolver {
  @Query(() => String)
  rootQuery(): string {
    return 'Welcome to the ddtup project root query!';
  }

  @Mutation(() => String)
  rootMutation(): string {
    return 'Root Mutation Executed Successfully!';
  }
}
