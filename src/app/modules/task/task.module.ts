import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { AppStylesModule } from '../app-styles.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    AppStylesModule
  ],
  declarations: [ContainerComponent, ListComponent]
})
export class TaskModule { }
