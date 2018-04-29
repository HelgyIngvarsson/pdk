import { Component, Input, style } from '@angular/core';
import { HttpService}       from '../services/http.service';
import { Profile}           from '../models/profile'
import { Feedback}          from '../models/feedback'
import { Router}            from '@angular/router';
import {UploadService}      from '../services/upload.service'
import { FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
    selector: 'cabinet-component',
    templateUrl: '../templates/cabinet.html',
    // styleUrls:['../templates/compact-gallery.css'],
    providers: [HttpService, UploadService]
})
export class CabinetComponent { 
    uploader:FileUploader;
    constructor(private router: Router, private httpService: HttpService,private uploadService: UploadService){
    }
    profile:Profile = new(Profile)
    feedback:Feedback = new(Feedback)

    changeImage(){
        if(this.uploader.queue[0])
        this.uploader.queue[0].upload()
    }

    ngOnInit(): void {
        this.uploader = this.uploadService.uploader
        this.httpService.getCurrentProfile().subscribe(data=>{
            this.profile = data["profile"];
            if(!this.profile){
                this.router.navigateByUrl('/login')
            } 
        })
        this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
           {
                let data = JSON.parse(response);
                this.profile.image.path = data["public_id"];
                this.httpService.updateImage(this.profile.image).subscribe(result=>{
                    let success = result["success"];
                    if(!success){
                        console.log(false)
                    }
                })
           }
    } 
    updateProfile(profile:Profile){
        this.httpService.updateProfile(profile).subscribe(result=>{
            let success = result["success"];
            if(!success){
                this.router.navigateByUrl("/login")
            }
        })
    }
    sendFeedback(feedback:Feedback){
        this.httpService.sendFeedback(feedback).subscribe(result=>{
            let success = result["success"];
            if(!success){
                this.router.navigateByUrl("/login")
            }else{
                feedback.message = ""
            }
        })
    }
}