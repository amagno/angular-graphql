import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ContainerComponent } from './container/container.component';
import { AppStylesModule } from '../app-styles.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { ItemComponent } from './item/item.component';
import { LoadingService } from './loading.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    AppStylesModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent, NewComponent, ContainerComponent, ItemComponent],
  providers: [
    ContactService,
    LoadingService
  ]
})
export class ContactModule { }
