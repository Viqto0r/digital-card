import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { ExperienceService } from './experience.service.js';

@Injectable({ scope: Scope.REQUEST })
export class AchievementsLoader {
  private readonly loader = new DataLoader<number, string[]>((ids) =>
    this.experienceService.findAchievementTexts(ids),
  );

  constructor(private readonly experienceService: ExperienceService) {}

  load(experienceId: number) {
    return this.loader.load(experienceId);
  }
}
