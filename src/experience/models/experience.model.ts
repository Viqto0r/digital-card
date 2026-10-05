import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Experience')
export class ExperienceModel {
  @Field(() => ID)
  id!: number;

  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field()
  startDate!: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date | null;
}
