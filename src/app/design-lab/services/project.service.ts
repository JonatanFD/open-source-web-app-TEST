import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Project } from '../model/project.entity';
import { map } from 'rxjs';
import { ProjectAssembler } from './project.assembler';
import { ProjectResponse } from './project.response';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService<Project> {
  constructor() {
    super('/projects');
  }

  public getAllById(id: string) {
    return this.http
      .get<ProjectResponse[]>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(
        map((response) => ProjectAssembler.ToEntitiesFromResponse(response))
      );
  }
}
