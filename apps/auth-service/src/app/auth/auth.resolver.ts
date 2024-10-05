import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.authService.getUsers();
  }

  @Mutation(() => User)
  async registerUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.authService.register(createUserInput);
  }
}
