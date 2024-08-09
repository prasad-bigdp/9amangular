import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Person1Component } from './person1/person1.component';
import { Person2Component } from './person2/person2.component';
import { MediatorService } from './mediator.service';
@NgModule({
  declarations: [
    AppComponent,
    Person1Component,
    Person2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MediatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
