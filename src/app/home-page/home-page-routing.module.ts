import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'blog-details', component: BlogDetailsComponent },
      { path: 'pricing', component: PricingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
