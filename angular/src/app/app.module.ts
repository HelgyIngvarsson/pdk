import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MenuComponent }   from './menu.component';
import { HomeComponent }   from './components/home.component';
import { FooterComponent }   from './components/footer.component';
import { LoginComponent }   from './components/login.component';
import { GalleryComponent }   from './components/gallery.component';
import { AboutComponent }   from './components/about.component';
import { RegistrationComponent }   from './components/registration.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SharedService } from './shared.service';
GalleryComponent

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';
 
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: RegistrationComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule,RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent,AboutComponent, MenuComponent,HomeComponent, LoginComponent,RegistrationComponent,FooterComponent,GalleryComponent ],
    bootstrap:    [ AppComponent],
    providers:    [CookieService,SharedService],
    
})
export class AppModule { }