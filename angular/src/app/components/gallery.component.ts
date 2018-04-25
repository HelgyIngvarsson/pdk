import { Component, style } from '@angular/core';
import { HttpService} from '../services/http.service';
import {Album} from '../models/album';

@Component({
    selector: 'gallery-component',
    templateUrl: '../templates/gallery.html',
    // styleUrls:['../templates/compact-gallery.css'],
    providers: []
})
export class GalleryComponent { 
    albums: Album[] = [];
    constructor(private httpService: HttpService){}

    ngOnInit(): void {
        this.httpService.getAlbums().subscribe(data => this.albums = data["albums"])
     } 
}