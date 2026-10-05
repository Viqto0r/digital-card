import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  findByProfile(profileId: number) {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { startDate: 'desc' },
    });
  }

  async findAchievementTexts(experienceIds: readonly number[]) {
    const achievements = await this.prisma.achievement.findMany({
      where: { experienceId: { in: [...experienceIds] } },
      orderBy: { order: 'asc' },
    });
    const byExperience = new Map<number, string[]>();

    for (const { experienceId, text } of achievements) {
      const texts = byExperience.get(experienceId) ?? [];
      texts.push(text);
      byExperience.set(experienceId, texts);
    }

    return experienceIds.map((id) => byExperience.get(id) ?? []);
  }
}
