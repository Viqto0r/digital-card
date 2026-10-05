import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileModel } from '../profile/models/profile.model.js';
import { AchievementsLoader } from './achievements.loader.js';
import { ExperienceService } from './experience.service.js';
import { ExperienceModel } from './models/experience.model.js';

@Resolver(() => ProfileModel)
export class ProfileExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @ResolveField(() => [ExperienceModel])
  experience(@Parent() profile: ProfileModel) {
    return this.experienceService.findByProfile(profile.id);
  }
}

@Resolver(() => ExperienceModel)
export class ExperienceResolver {
  constructor(private readonly achievementsLoader: AchievementsLoader) {}

  @ResolveField(() => [String])
  achievements(@Parent() experience: ExperienceModel) {
    return this.achievementsLoader.load(experience.id);
  }
}
