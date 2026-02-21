import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { CourseDetails } from './shared/components/course-details/course-details';
import { AddCourse } from './features/add-course/add-course';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'course/:id', component: CourseDetails },
  { path: 'add-course', component: AddCourse },
];
