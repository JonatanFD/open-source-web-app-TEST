import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../design-lab/services/project.service';
import { Project } from '../../../design-lab/model/project.entity';

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    private demoUserId: string = 'proj-001';

    private projectService = inject(ProjectService);

    private projects: Project[] = [];

    ngOnInit(): void {
        console.log('ProjectsComponent initialized');
        this.projectService.getAllById(this.demoUserId).subscribe((projs) => {
            this.projects = projs;
            console.log(this.projects);
        });
    }
}
