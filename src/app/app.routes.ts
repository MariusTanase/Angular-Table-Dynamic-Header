import { Routes } from '@angular/router';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';

export const routes: Routes = [
  { path: 'route-a', component: RouteAComponent },
  { path: 'route-b', component: RouteBComponent },
  { path: '', redirectTo: 'route-a', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'route-a' }, // Catch-all route (prevents broken links)
];
