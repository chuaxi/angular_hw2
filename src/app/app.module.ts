import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent } from './app.home';
import { AboutComponent } from './app.about';
import { DetailComponent } from './app.detail';
import { ArrowComponent } from './app.arrow'; 
import { routing }        from './app.routing';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent, AboutComponent, ArrowComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
