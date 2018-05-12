import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResourcesComponent } from './resources/resources.component';

import { examples } from './examples';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  ...examples,
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
