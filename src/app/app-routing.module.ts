import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./stranice/home/home.component";
import {MenuComponent} from "./stranice/menu/menu.component";
import {AboutComponent} from "./stranice/about/about.component";
import {ContactComponent} from "./stranice/contact/contact.component";
import {NarudzbaComponent} from "./stranice/narudzba/narudzba.component";

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'menu/:id',component:NarudzbaComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  declarations: [],
  imports:

    [RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule { }
