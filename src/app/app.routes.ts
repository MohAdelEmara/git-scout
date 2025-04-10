import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { StarsComponent } from './pages/stars/stars.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'repo', component: RepositoriesComponent },
  { path: 'stars', component: StarsComponent }
];