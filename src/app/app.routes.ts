import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skills } from './pages/skills/skills';
import { Certificates } from './pages/certificates/certificates';
import { Education } from './pages/education/education';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'skills', component: Skills},
  {path: 'certificates', component: Certificates},
  {path: 'education', component: Education}
];
