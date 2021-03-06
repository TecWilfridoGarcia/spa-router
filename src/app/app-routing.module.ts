import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { SingComponent } from './components/sing/sing.component';

const routes: Routes = [
  // { path: '**', pathMatch:'full', redirectTo:'' },
   { path: 'forms', component: FormsComponent },
  { path: 'api', component: ApiComponent },
  { path: '', component: HomeComponent },
  { path: 'sing/:id', component:  SingComponent },
  // { path: 'hs', component: HardstoreComponent },
  // { path: 'st', component: StationeryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//,

