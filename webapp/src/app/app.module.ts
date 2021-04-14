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
import { RegisterComponent } from './components/user/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroLandingComponent,
    BenefitsComponent,
    ServicesTestimonialsComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactComponent
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
