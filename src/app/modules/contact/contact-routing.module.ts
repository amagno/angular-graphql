import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: ContainerComponent, children: [
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: NewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
