import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DiaryComponent } from './diary/diary.component';
import { HollowComponent } from './hollow/hollow.component';

const routes: Routes = [
      { 
        path:'diary',
        component: DiaryComponent,
      },
      {
        path:'hollow',
        component: HollowComponent,
      }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NestRoutingModule { }