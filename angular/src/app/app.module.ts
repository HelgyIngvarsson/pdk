import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MenuComponent }   from './menu.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpClientModule }   from '@angular/common/http';
 
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, MenuComponent ],
    bootstrap:    [ AppComponent, MenuComponent ],
    providers:    [CookieService]
})
export class AppModule { }