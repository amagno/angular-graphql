import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppApolloClientModule } from './app-apollo-client.module';
import { AppStylesModule } from './app-styles.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../services/auth.service';
import { NotfoundComponent } from '../notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppApolloClientModule,
    BrowserAnimationsModule,
    AppStylesModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
