import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PortraitService} from './portrait.service';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {
  uploadedFiles: any[] = [];
  fileType = 'image/*';
  url = 'http://localhost:3000/school/media/upload/photo';
  fileData = [];

  title = 'fileUpload';
  image;

  constructor(private form: FormBuilder,public portraitService: PortraitService) { }

  ngOnInit(): void {
  }
  upload(event: any){
    const files: FileList = event.target.files;
    console.log(files);
    const formData = new FormData();


    for(let index = 0; index < files.length; index++){
      const image = files[index];
      formData.append('files',image);
    }
    this.portraitService.uploadImages(formData).subscribe(
      (result)=>{
        console.log(result);
      },error => {
        console.log(error);
      }
    )
  }

}
