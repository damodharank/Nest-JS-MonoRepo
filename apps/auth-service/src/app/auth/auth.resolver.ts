import { Resolver, Query, Mutation , Args } from '@nestjs/graphql';
import { AppService } from '../app.service';

@Resolver('Query')
export class AuthResolver {

  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getAuthMessage(): string {
    return 'Hello from Auth Service Apollo Server!';
  }

   @Mutation(() => String)
  registerUser(
    @Args('userInput')
    userInput: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): string {
    // console.log('User Registration Data:', userInput);
     // return `User ${userInput.firstName} ${userInput.lastName} registered successfully!`;
     return this.appService.registerUser(userInput);
  }
}
