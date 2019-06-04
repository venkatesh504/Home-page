import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  declarations: [HomeFooterComponent, HomeNavComponent],
  imports: [
    CommonModule,
    AppCommonRoutingModule
  ],
  exports:[
    HomeNavComponent ,
    HomeFooterComponent
  ],
})
export class AppCommonModule { }
