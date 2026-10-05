import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service.js';
import { ProfileService } from './profile.service.js';

describe('ProfileService', () => {
  const findFirst = vi.fn();
  let service: ProfileService;

  beforeEach(async () => {
    findFirst.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        ProfileService,
        { provide: PrismaService, useValue: { profile: { findFirst } } },
      ],
    }).compile();

    service = module.get(ProfileService);
  });

  it('returns the profile', async () => {
    const profile = { id: 1, name: 'Name', description: 'About' };
    findFirst.mockResolvedValue(profile);

    await expect(service.getProfile()).resolves.toEqual(profile);
  });

  it('throws NotFoundException when the profile is missing', async () => {
    findFirst.mockResolvedValue(null);

    await expect(service.getProfile()).rejects.toThrow(NotFoundException);
  });
});
