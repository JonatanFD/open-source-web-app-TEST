import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'explore',
        loadComponent: () =>
            import('./public/pages/explore/explore.component').then(
                (c) => c.ExploreComponent
            ),
    },
    {
        path: 'design-lab',
        loadComponent: () =>
            import('./public/pages/design-lab/design-lab.component').then(
                (c) => c.DesignLabComponent
            ),
    },
    {
        path: 'design-lab/new',
        loadComponent: () =>
            import('./public/pages/design-lab/new/new.component').then(
                (c) => c.NewComponent
            ),
    },
    {
        path: 'favorites',
        loadComponent: () =>
            import('./public/pages/favorites/favorites.component').then(
                (c) => c.FavoritesComponent
            ),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./public/pages/projects/projects.component').then(
                (c) => c.ProjectsComponent
            ),
    },
    {
        path: 'templates',
        loadComponent: () =>
            import('./public/pages/templates/templates.component').then(
                (c) => c.TemplatesComponent
            ),
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./public/pages/settings/settings.component').then(
                (c) => c.SettingsComponent
            ),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
