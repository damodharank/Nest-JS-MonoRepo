import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRouteInput {
  @Field()
  name: string;

  @Field()
  location: string;

  @Field()
  destination: string;
}
