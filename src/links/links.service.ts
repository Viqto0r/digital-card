import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  findByProfile(profileId: number) {
    return this.prisma.link.findMany({
      where: { profileId },
      orderBy: { id: 'asc' },
    });
  }
}
