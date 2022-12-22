import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
