import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompensationComponentComponent } from './compensation-component/compensation-component.component';
import { DesputeResolutionComponent } from './despute-resolution/despute-resolution.component';

@NgModule({
  declarations: [
    AppComponent,
    CompensationComponentComponent,
    DesputeResolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
