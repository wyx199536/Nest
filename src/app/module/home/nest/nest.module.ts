import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NestRoutingModule } from './nest-routing.module';//路由模块
import { NestComponent } from './nest.component';//初始页面

import { DiaryComponent } from './diary/diary.component';
import { HollowComponent } from './hollow/hollow.component';

@NgModule({
  declarations: [
    NestComponent,
    DiaryComponent,
    HollowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NestRoutingModule
  ],
  providers: [],
  bootstrap: [NestComponent]
})
export class NestModule { }