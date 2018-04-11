import { Component, style } from '@angular/core';
     
@Component({
    selector: 'menu-component',
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>`,
    styles:  [`:host{
        padding-top:60px;

    }`]
})
export class AppComponent { 
    name: "";
}