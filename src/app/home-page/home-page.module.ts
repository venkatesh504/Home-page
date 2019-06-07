import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {AppCommonModule} from './../app-common/app-common.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [HomePageComponent, LandingPageComponent, BlogComponent, ContactUsComponent, BlogDetailsComponent, PricingComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    AppCommonModule
  ]
})
export class HomePageModule { }
