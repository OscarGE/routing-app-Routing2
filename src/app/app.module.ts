import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NintendoComponent } from './components/nintendo/nintendo.component';
import { PlaystationComponent } from './components/playstation/playstation.component';
import { XboxComponent } from './components/xbox/xbox.component';



@NgModule({
  declarations: [
    AppComponent,
    NintendoComponent,
    PlaystationComponent,
    XboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
