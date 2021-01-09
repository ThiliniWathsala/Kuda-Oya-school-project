import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PortraitService} from './portrait.service';
import {InputTextModule} from 'primeng/inputtext';

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
  images = [];
  disableUpload = true;
  data;

  constructor(private form: FormBuilder,public portraitService: PortraitService) { }

  ngOnInit(): void {
  }
  upload(event: any){
    this.disableUpload = false;
    const formData = new FormData();
    const files: FileList = event.target.files;
    for(let index = 0; index < files.length; index++){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[index]);
      reader.onload = (events:any)=>{
        this.images.push(events.target.result);
      }
      const image = files[index];
      formData.append('files',image);
    }
    this.data = formData;
  }

  cancelUpload(){
    this.images = [];
    this.data= null;
  }
  save(){
    console.log(this.data);
    this.portraitService.uploadImages(this.data).subscribe(
      (result)=>{
        console.log(result);
        this.images = [];
      },error => {
        console.log(error);
      }
    )
  }
}
