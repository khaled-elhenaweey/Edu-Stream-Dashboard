import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { CourseDetails } from './shared/components/course-details/course-details';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'course/:id', component: CourseDetails },
];
