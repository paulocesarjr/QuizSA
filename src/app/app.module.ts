import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerguntasComponent } from './pages/perguntas/perguntas.component';
import { PerguntasService } from './services/perguntas.service';

@NgModule({
  declarations: [
    AppComponent,
    PerguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PerguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
