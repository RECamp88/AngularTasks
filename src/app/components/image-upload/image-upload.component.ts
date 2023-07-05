import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

    url: any;
    selectedFile: File | undefined;

    onFileSelected(event : any) {
      this.selectedFile = <File> event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);

      reader.onload = (_event)=> {
        this.url = reader.result;
      }
    }
  
  }

