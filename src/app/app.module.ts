import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';//路由模块
import { AppComponent } from './app.component';//初始页面
//子模块
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';
//@Injectable
import { ControllableLocalStorageService } from './common/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ControllableLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
