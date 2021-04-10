import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HeroLandingComponent } from './components/main/hero-landing/hero-landing.component';
import { BenefitsComponent } from './components/main/benefits/benefits.component';
import { ServicesTestimonialsComponent } from './components/main/services-testimonials/services-testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroLandingComponent,
    BenefitsComponent,
    ServicesTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
