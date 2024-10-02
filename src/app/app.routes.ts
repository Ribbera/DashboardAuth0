import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { notFoundComponent } from './pages/404/404.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '**', component: notFoundComponent } // Wildcard route for a 404 page
];