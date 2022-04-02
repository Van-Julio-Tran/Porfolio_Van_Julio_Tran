import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercadeComponent } from './componets/acercade/acercade.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
