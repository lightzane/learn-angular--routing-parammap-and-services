import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RaceService } from './eve-echoes/race.service';

@NgModule({
  declarations: [
    AppComponent,
    ROUTING_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [RaceService], // to use the service across all components - this is called Register a service
  bootstrap: [AppComponent]
})
export class AppModule { }
