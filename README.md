# Digital card backend

GraphQL backend for a digital business card: profile, links, skills, work experience and projects.
Stack: TypeScript (strict), NestJS, GraphQL (code-first, Apollo Server), Prisma, PostgreSQL, Docker.

## Run with Docker

```bash
docker compose up --build
```

Migrations and seed run on startup. Apollo Sandbox is at <http://localhost:3000/graphql>.

## Run locally

Requires Node.js 20+ and PostgreSQL.

```bash
cp .env.example .env    # adjust DATABASE_URL if needed
npm i
npx prisma migrate dev
npx prisma db seed
npm run start:dev
```

Checks: `npm run lint`, `npm test`. The e2e test needs a migrated and seeded database: `npm run test:e2e`.

## Example query

```graphql
{
  profile {
    name
    description
    links {
      label
      url
    }
    skills {
      name
    }
    experience {
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      name
      url
    }
  }
}
```

## Design notes

- **Layers.** Resolvers only deal with GraphQL; services are the only place that talks to `PrismaService`. GraphQL models are separate from Prisma types. Nested profile fields are `@ResolveField`s in their own modules, so only the requested data is fetched.
- **N+1.** `Experience.achievements` uses a request-scoped `DataLoader`: achievements for all requested experience entries are loaded with a single `WHERE experienceId IN (...)` query.
- **Schema.** Everything hangs off `profileId` with `onDelete: Cascade` and indexed foreign keys. Ordering is stored in an `order` column; experience is sorted by `startDate desc`.
- **Seed.** Idempotent: the profile is recreated in one transaction. The data in `prisma/seed-data.ts` is placeholder content, replace it with your own.
- **Production image.** `prisma` and `tsx` are regular dependencies because the container runs `prisma migrate deploy` and `prisma db seed` on startup.
