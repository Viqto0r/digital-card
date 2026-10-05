import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileModel } from '../profile/models/profile.model.js';
import { SkillModel } from './models/skill.model.js';
import { SkillsService } from './skills.service.js';

@Resolver(() => ProfileModel)
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @ResolveField(() => [SkillModel])
  skills(@Parent() profile: ProfileModel) {
    return this.skillsService.findByProfile(profile.id);
  }
}
