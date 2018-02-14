import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppStylesModule } from '../app-styles.module';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service';
import { NoAuthGuard } from './no-auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AppStylesModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  providers: [
    UserService,
    NoAuthGuard
  ]
})
export class UserModule { }
