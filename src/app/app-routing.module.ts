import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './core/auth/pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
