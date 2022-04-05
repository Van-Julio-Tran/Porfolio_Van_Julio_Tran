import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercadeComponent } from './componets/acercade/acercade.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';
import { HdskillsComponent } from './componets/hdskills/hdskills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HdskillsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      backgroundColor: "#c3e3fd",
      showTitle: true,
      title: "",
      showSubtitle: false,

})    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
