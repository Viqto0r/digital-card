import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileModel } from '../profile/models/profile.model.js';
import { LinkModel } from './models/link.model.js';
import { LinksService } from './links.service.js';

@Resolver(() => ProfileModel)
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}

  @ResolveField(() => [LinkModel])
  links(@Parent() profile: ProfileModel) {
    return this.linksService.findByProfile(profile.id);
  }
}
