import { PackageComponent } from './components/package/package.component';
import { SendQuotationComponent } from './components/send-quotation/send-quotation.component';
import { VendorAuthGuard } from './../guards/vendor-auth.guard';
import { ManagePackagesComponent } from './components/manage-packages/manage-packages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CheckChangesGuard } from './guards/check-changes.guard';

const routes: Routes = [
  {
    path:'vendor',
    component:VendorComponent,
    children:[
      {
        path:'manage-packages',
        component:ManagePackagesComponent,
        canActivate:[VendorAuthGuard]
      },
      {
        path:'view-profile',
        component:ViewProfileComponent,
        canActivate:[VendorAuthGuard],
        canDeactivate:[CheckChangesGuard]
      },
      {
        path:'send-quotation/:userid/:requestid',
        component:SendQuotationComponent,
        canActivate:[VendorAuthGuard]
      },
      {
        path:'package/:id',
        component:PackageComponent,
        canActivate:[VendorAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }