import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

const app = await NestFactory.create(AppModule);

await app.listen(app.get(ConfigService).getOrThrow<number>('PORT'));
