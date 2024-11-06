import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyTeamComponent } from './pages/my-team/my-team/my-team.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'my-team',
    component: MyTeamComponent,
  },
];
