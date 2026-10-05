import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileModel } from '../profile/models/profile.model.js';
import { ProjectModel } from './models/project.model.js';
import { ProjectsService } from './projects.service.js';

@Resolver(() => ProfileModel)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @ResolveField(() => [ProjectModel])
  projects(@Parent() profile: ProfileModel) {
    return this.projectsService.findByProfile(profile.id);
  }
}
