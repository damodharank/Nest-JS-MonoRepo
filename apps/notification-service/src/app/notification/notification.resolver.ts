import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Query')
export class NotificationResolver {
  @Query(() => String)
  getNotification(): string {
    return 'Hello from Notification Service GraphQL!';
  }
}
