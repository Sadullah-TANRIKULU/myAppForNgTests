import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
