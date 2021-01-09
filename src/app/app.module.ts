import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { PortraitComponent } from './component/pages/media/portrait/portrait.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {PortraitService} from './component/pages/media/portrait/portrait.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PortraitComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FileUploadModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [PortraitService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
