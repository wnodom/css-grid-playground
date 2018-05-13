import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';

import { examples } from './examples';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  ...examples,
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
