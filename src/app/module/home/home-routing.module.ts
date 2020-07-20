import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NestComponent } from '../../module/home/nest/nest.component';
import { GardenComponent } from '../../module/home/garden/garden.component';
import { PublicComponent } from '../../module/home/public/public.component';


const routes: Routes = [
      { 
        path:'nest',
        component: NestComponent,
        loadChildren: () => import('./nest/nest-routing.module').then(mod => mod.NestRoutingModule)
      },
      {
        path:'garden',
        component: GardenComponent,
      },
      {
        path:'public',
        component: PublicComponent,
      }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }