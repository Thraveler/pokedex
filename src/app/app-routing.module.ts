import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeTableComponent } from "./components/poke-table/poke-table.component";
import { PokeDetailComponent } from "./components/poke-detail/poke-detail.component";


const routes: Routes = [
  { path: "", component: PokeTableComponent },
  { path: "detail/:pokemon", component: PokeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
