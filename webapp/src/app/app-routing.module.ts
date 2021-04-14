import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from "./components/services/services.component";
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent},
  {path: 'home', component: MainComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
