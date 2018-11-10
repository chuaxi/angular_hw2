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
import { CurrencyPipe }   from './app.currencypipe';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent, AboutComponent, ArrowComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
