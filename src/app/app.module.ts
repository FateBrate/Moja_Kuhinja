import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './stranice/home/home.component';
import { MenuComponent } from './stranice/menu/menu.component';
import { AboutComponent } from './stranice/about/about.component';
import { ContactComponent } from './stranice/contact/contact.component';
import{AppRoutingModule} from "./app-routing.module";
import { NarudzbaComponent } from './stranice/narudzba/narudzba.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    NarudzbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
