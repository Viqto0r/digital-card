import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Link')
export class LinkModel {
  @Field()
  label!: string;

  @Field()
  url!: string;
}
