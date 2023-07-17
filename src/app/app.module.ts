import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PaginationComponent } from './componentes/pagination/pagination.component';
import { ButtonComponent } from './componentes/button/button.component';
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
