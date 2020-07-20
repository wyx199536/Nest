import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';//路由模块
import { HomeComponent } from '../home/home.component';//初始页面
//子模块
import { NestComponent } from './nest/nest.component';
import { GardenComponent } from './garden/garden.component';
import { PublicComponent } from './public/public.component';


@NgModule({
  declarations: [
    HomeComponent,
    NestComponent,
    GardenComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }