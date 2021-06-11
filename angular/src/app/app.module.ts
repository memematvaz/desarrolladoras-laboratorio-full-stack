import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule } from "@angular/forms";

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
