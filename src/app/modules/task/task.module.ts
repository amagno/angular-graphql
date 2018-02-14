import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { AppStylesModule } from '../app-styles.module';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthTokenGuard } from './auth-token.guard';
import { TaskService } from './task.service';
import { EditComponent } from './edit/edit.component';
import { TaskAnimationService } from './task-animation.service';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    AppStylesModule,
  ],
  providers: [
    TaskService,
    TaskAnimationService,
    AuthTokenGuard
  ],
  declarations: [
    ContainerComponent,
    ListComponent,
    NewComponent,
    EditComponent
  ]
})
export class TaskModule { }
