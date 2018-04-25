import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { examples } from './examples';

const routes: Routes = [
  ...examples,
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
