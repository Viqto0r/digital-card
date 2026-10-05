import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  findByProfile(profileId: number) {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { order: 'asc' },
    });
  }
}
