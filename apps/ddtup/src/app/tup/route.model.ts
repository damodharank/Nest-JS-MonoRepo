// src/app/auth/user.model.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Route {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  location: string;

  @Field()
  destination: string;
}
