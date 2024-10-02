import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // Default route
  { path: '**', redirectTo: '' } // Wildcard route for a 404 page
];