import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/user/user.module#UserModule' },
  { path: 'tasks', loadChildren: 'app/modules/task/task.module#TaskModule' },
  { path: 'contacts', loadChildren: 'app/modules/contact/contact.module#ContactModule' },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
