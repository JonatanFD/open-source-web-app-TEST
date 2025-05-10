import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../design-lab/services/project.service';
import { Project } from '../../../design-lab/model/project.entity';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-projects',
    imports: [MatIconModule, MatCardModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    private demoUserId: string = 'user-001';

    private projectService = inject(ProjectService);

    // TODO: We should change this constant name
    private RECENT_PROJECTS_DIFFTIME: number = 1;

    projects: Project[] = [];
    recentProjects: Project[] = [];

    getRecentProjects(): Project[] {
        return this.projects.filter((project) => {
            // Check if the project was created within the last RECENT_PROJECTS_DIFFTIME days
            const projectDate = new Date(project.createdAt);
            const currentDate = new Date();

            const diffTime = Math.abs(
                currentDate.getTime() - projectDate.getTime()
            );
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return diffDays <= this.RECENT_PROJECTS_DIFFTIME;
        });
    }

    ngOnInit(): void {
        // fetch all projects based on user id, this must be validated with supabase auth
        // and the user id must be passed to the project service
        this.projectService.getAllById(this.demoUserId).subscribe((projs) => {
            this.projects = projs;
            this.recentProjects = this.getRecentProjects();
        });
    }
}
