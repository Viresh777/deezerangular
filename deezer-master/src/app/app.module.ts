import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent } from './home/home.component';
import { SharedModule } from './api/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    NavbarComponent,
    ArtistDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
