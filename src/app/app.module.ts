import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestService } from './services/request.service';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { FormsComponent } from './components/forms/forms.component';
import { SingComponent } from './components/sing/sing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HomeComponent,
    ApiComponent,
    FormsComponent,
    SingComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
