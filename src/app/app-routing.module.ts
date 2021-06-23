import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KullanicilarComponent} from './kullanicilar/kullanicilar.component';
import {KullaniciListeComponent} from './kullanici-liste/kullanici-liste.component';
import {KullaciListelemeComponent} from './kullaci-listeleme/kullaci-listeleme.component';

const routes: Routes = [
  {path : 'kullanicilar', component : KullaciListelemeComponent},
  {path : 'digerSayfa', component : KullaniciListeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
