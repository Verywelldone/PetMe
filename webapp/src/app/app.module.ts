import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {MainComponent} from './components/main/main.component';
import {HeroLandingComponent} from './components/main/hero-landing/hero-landing.component';
import {BenefitsComponent} from './components/main/benefits/benefits.component';
import {ServicesTestimonialsComponent} from './components/main/services-testimonials/services-testimonials.component';
import {ServicesComponent} from './components/services/services.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/user/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "./material-module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroLandingComponent,
    BenefitsComponent,
    ServicesTestimonialsComponent,
    ServicesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
