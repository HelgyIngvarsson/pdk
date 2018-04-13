import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MenuComponent }   from './menu.component';
import { HomeComponent }   from './components/home.component';
import { LoginComponent }   from './components/login.component';
import { RegistrationComponent }   from './components/registration.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';
 
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: RegistrationComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule,RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, MenuComponent,HomeComponent, LoginComponent,RegistrationComponent ],
    bootstrap:    [ AppComponent],
    providers:    [CookieService],
    
})
export class AppModule { }