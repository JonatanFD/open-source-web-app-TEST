import { Project } from '../model/project.entity';
import { CanvasAssembler } from './canvas.assembler';
import { ProjectResponse } from './project.response';

export class ProjectAssembler {
  static ToEntityFromResponse(response: ProjectResponse): Project {
    return {
      id: response.id,
      userId: response.user_id,
      createdAt: response.created_at,
      status: response.status,
      previewImageUrl: response.preview_image_url,
      name: response.name,
      tshirtColor: response.tshirt_color,
      tshirtSize: response.tshirt_size,
      lastModified: response.last_modified,
      canvas: CanvasAssembler.toEntityFromResponse(response.canvas),
    };
  }

  static ToEntitiesFromResponse(response: ProjectResponse[]): Project[] {
    return response.map((projectResponse) => {
      return ProjectAssembler.ToEntityFromResponse(projectResponse);
    });
  }
}
