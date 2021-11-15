import { PackageComponent } from './components/package/package.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { CheckChangesGuard } from './guards/check-changes.guard';
import { ViewQuotationComponent } from './components/view-quotation/view-quotation.component';
import { UserAuthGuard } from './../guards/user-auth.guard';
import { RequestQuotationComponent } from './components/request-quotation/request-quotation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewGalleryComponent } from './components/view-gallery/view-gallery.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'request-quotation',
        component:RequestQuotationComponent,
        canActivate:[UserAuthGuard]
      },
      {
        path:'view-quotation',
        component:ViewQuotationComponent,
        canActivate:[UserAuthGuard]
      },
      {
        path:'view-profile',
        component:ViewProfileComponent,
        canActivate:[UserAuthGuard],
        canDeactivate:[CheckChangesGuard]
      },
      {
        path:'view-request',
        component:ViewRequestComponent,
        canActivate:[UserAuthGuard]
      },
      {
        path:'package/:id',
        component:PackageComponent,
        canActivate:[UserAuthGuard]
      },
      {
        path:'view-gallery',
        component:ViewGalleryComponent,
        canActivate:[UserAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }