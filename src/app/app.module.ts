import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppShellModule } from '@angular/app-shell';

import { AppComponent } from './app.component';
import { PrerenderedModule } from './prerendered';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppShellModule.prerender()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
