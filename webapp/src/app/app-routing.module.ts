import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServicesComponent} from "./components/services/services.component";
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/user/login/login.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'home', component: MainComponent
  }, {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
