import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';

const PROFILE_QUERY = `
  {
    profile {
      id
      name
      description
      links { label url }
      skills { id name }
      experience { id company position startDate endDate achievements }
      projects { id name url }
    }
  }
`;

interface GraphQLResult {
  errors?: unknown;
  data: {
    profile: {
      name: string;
      links: unknown[];
      skills: unknown[];
      projects: unknown[];
      experience: { achievements: string[] }[];
    };
  };
}

// Needs a migrated and seeded database, see README.
describe('profile query (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('returns the profile with nested data', async () => {
    const response = await request(
      app.getHttpServer() as Parameters<typeof request>[0],
    )
      .post('/graphql')
      .send({ query: PROFILE_QUERY })
      .expect(200);

    const result = response.body as GraphQLResult;

    expect(result.errors).toBeUndefined();

    const { profile } = result.data;

    expect(profile.name).toEqual(expect.any(String));
    expect(profile.links.length).toBeGreaterThan(0);
    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.projects.length).toBeGreaterThan(0);
    expect(profile.experience[0].achievements).toEqual(expect.any(Array));
  });
});
