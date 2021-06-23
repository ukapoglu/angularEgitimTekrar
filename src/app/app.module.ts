import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KullaniciListeComponent } from './kullanici-liste/kullanici-liste.component';
import { KullaciListelemeComponent } from './kullaci-listeleme/kullaci-listeleme.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KullanicilarComponent,
    NavbarComponent,
    KullaniciListeComponent,
    KullaciListelemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
