import { LoginModule } from './../../routes/login/login.module';
import { AboutModule } from './../../routes/about/about.module';
import { HomeModule } from './../../routes/home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    HomeModule,
    LoginModule,
    LayoutRoutingModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports: [ShellComponent]
})
export class LayoutModule { }
