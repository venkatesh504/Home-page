import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{path:'',component:HomePageComponent,
children:[ {path:'',redirectTo:'landing-page',pathMatch:'full'},
{path:'landing-page',component:LandingPageComponent},
{path:'blog',component:BlogComponent},
{path:'contact-us',component:ContactUsComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
