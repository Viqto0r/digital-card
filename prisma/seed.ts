import { PrismaClient } from '@prisma/client';
import { profile } from './seed-data.js';

const prisma = new PrismaClient();

const withOrder = <T>(items: T[]) =>
  items.map((item, order) => ({ ...item, order }));

// There is a single profile: recreate it from scratch, cascades clear the rest.
async function main() {
  await prisma.$transaction([
    prisma.profile.deleteMany(),
    prisma.profile.create({
      data: {
        name: profile.name,
        description: profile.description,

        links: { create: profile.links },

        skills: {
          create: withOrder(profile.skills.map((name) => ({ name }))),
        },

        experience: {
          create: withOrder(
            profile.experience.map(({ achievements, ...experience }) => ({
              ...experience,
              achievements: {
                create: withOrder(achievements.map((text) => ({ text }))),
              },
            })),
          ),
        },

        projects: { create: withOrder(profile.projects) },
      },
    }),
  ]);
}

try {
  await main();
} finally {
  await prisma.$disconnect();
}
