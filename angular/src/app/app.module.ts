import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MenuComponent }   from './menu.component';
import { HomeComponent }   from './components/home.component';
import { FooterComponent }   from './components/footer.component';
import { LoginComponent }   from './components/login.component';
import { GalleryComponent }   from './components/gallery.component';
import { BlogComponent }   from './components/blog.component';
import { PostComponent }   from './components/post.component';
import { RegistrationComponent }   from './components/registration.component';
import { SharedService } from './services/shared.service';
import { AgmCoreModule } from '@agm/core';
import { AuthGuardService } from './services/auth.guard';
import { CabinetComponent } from './components/cabinet.component';

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';
 
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: RegistrationComponent },
    { path: 'gallery', component: GalleryComponent }, 
    { path: 'post/:id', component: PostComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cabinet',component:CabinetComponent,canActivate:[AuthGuardService]}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule,
                    HttpClientModule,RouterModule.forRoot(appRoutes),
                    AgmCoreModule.forRoot({apiKey: 'AIzaSyDWd6Y5G_dHf-bWA63XgzvYaJqIBcT6Wgs'})],
    declarations: [ AppComponent,CabinetComponent,
                    PostComponent,BlogComponent, 
                    MenuComponent,HomeComponent, 
                    LoginComponent,RegistrationComponent,
                    FooterComponent,GalleryComponent ],
    bootstrap:    [ AppComponent],
    providers:    [ SharedService,AuthGuardService],
    
})
export class AppModule { }