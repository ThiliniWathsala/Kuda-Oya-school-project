import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PortraitService{
  constructor(public http: HttpClient) {
  }

uploadImages(formData):Observable<any>{
  return this.http.post('http://localhost:3000/school/media/file', formData).pipe(
    map((data) => {
      return data;
    })
  );
}



}
