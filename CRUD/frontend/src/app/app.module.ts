import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ApiService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
