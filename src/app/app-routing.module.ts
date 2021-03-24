import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EveEchoesComponent } from './eve-echoes/eve-echoes.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'eveechoes', component: EveEchoesComponent },
  { path: '', redirectTo: '/eveechoes', pathMatch: 'full' },
  { path: 'eveechoes/:race', component: EveEchoesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ** Best Practice **
// so this will be the only *import* in app.module.ts
export const ROUTING_COMPONENTS = [EveEchoesComponent, PageNotFoundComponent]