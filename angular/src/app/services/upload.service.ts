import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Injectable()
export class UploadService{

    uploader:FileUploader;

    constructor(private cloudinary: Cloudinary, private http: HttpClient){
 // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/image/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: false,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
        // Add Cloudinary's unsigned upload preset to the upload form
        form.append('upload_preset', this.cloudinary.config().upload_preset);
        form.append('api_key', this.cloudinary.config().api_key);
        // Add built-in and custom tags for displaying the uploaded photo in the list
        // form.append('context', `photo=111`);
        // Upload to a custom folder
        // Note that by default, when uploading via the API, folders are not automatically created in your Media Library.
        // In order to automatically create the folders based on the API requests,
        // please go to your account upload settings and set the 'Auto-create folders' option to enabled.
        // form.append('folder', 'images');
        // Add file to upload
        form.append('file', fileItem);
  
        // Use default "withCredentials" value for CORS requests
        fileItem.withCredentials = false;
        return { fileItem, form };
      };
    }
 
}