import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skills } from './pages/skills/skills';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'skills', component: Skills}
];
