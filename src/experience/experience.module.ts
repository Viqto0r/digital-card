import { Module } from '@nestjs/common';
import { AchievementsLoader } from './achievements.loader.js';
import { ExperienceService } from './experience.service.js';
import {
  ExperienceResolver,
  ProfileExperienceResolver,
} from './experience.resolver.js';

@Module({
  providers: [
    ProfileExperienceResolver,
    ExperienceResolver,
    ExperienceService,
    AchievementsLoader,
  ],
})
export class ExperienceModule {}
