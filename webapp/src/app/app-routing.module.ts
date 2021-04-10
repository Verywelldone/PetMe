import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServicesComponent} from "./components/services/services.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'home', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
