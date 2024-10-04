import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppService } from '../app.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AppService) {}

  @Mutation(() => String)
  registerUser(@Args('createUserInput') createUserInput: CreateUserInput): string {
    return this.authService.registerUser(createUserInput);
  }

  @Query(() => String)
  getAuthMessage(): string {
    return 'Hello from Auth Service Apollo Server!';
  }
}
