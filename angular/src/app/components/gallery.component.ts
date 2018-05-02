import { Component, style } from '@angular/core';
import { HttpService} from '../services/http.service';
import {Album} from '../models/album';
import { Image, ModalImage, PlainGalleryConfig,PlainGalleryStrategy,GridLayout} from 'angular-modal-gallery';

@Component({
    selector: 'gallery-component',
    templateUrl: '../templates/gallery.html',
    // styleUrls:['../templates/compact-gallery.css'],
    providers: [HttpService]
})
export class GalleryComponent { 
    selectedAlbum:Album = new Album();
    all:Album = new Album();
    albums: Album[] =[];
    images:Image[] =[];
    plainGalleryGrid: PlainGalleryConfig = {
        strategy: PlainGalleryStrategy.GRID,
        layout: new GridLayout({ width: '24%', height: '24%' }, { length: 4, wrap: true })
      };
    constructor(private httpService: HttpService){}

    ngOnInit(): void {
        this.httpService.getAlbums().subscribe(data =>{ 
            this.albums = data["albums"];
            this.all.title = "всі фото";
            this.all.images = new Array();
            let imgs:Image[] = new Array();
            this.albums.forEach(album => {
                album.images.forEach((image, index) => {
                    this.all.images.push(image)
                    imgs.push(new Image(Number(image.id),{img:'https://res.cloudinary.com/pershotravnbk/image/upload/v1525015358/'+image.path}))
                });            
            });
            this.albums.push(this.all);
            this.albums.reverse();
            this.selectedAlbum = this.all;
            this.images = imgs;
        })
    } 
    setAlbum(selected:Album){
        let imgs:Image[] = new Array()
        this.selectedAlbum = selected;
        this.selectedAlbum.images.forEach((image, index) => {
                    imgs.push(new Image(Number(image.id),{img:'https://res.cloudinary.com/pershotravnbk/image/upload/v1525015358/'+image.path}))
                });            
        this.images = imgs;
    }
}