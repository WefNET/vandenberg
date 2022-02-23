import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdwardComponent } from './features/edward/edward.component';
import { IdaComponent } from './features/ida/ida.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwardComponent,
    IdaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
