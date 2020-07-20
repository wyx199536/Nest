import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./module/home/home-routing.module').then(mod => mod.HomeRoutingModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true})  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
