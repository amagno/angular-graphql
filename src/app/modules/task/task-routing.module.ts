import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NewComponent } from './new/new.component';
import { AuthTokenGuard } from './auth-token.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', canActivate: [AuthTokenGuard], component: ContainerComponent, children: [
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
