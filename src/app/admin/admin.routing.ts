import { AdminAuthGuard } from './../guards/admin-auth.guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserRequestComponent } from './components/user-request/user-request.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'user-request',
        component:UserRequestComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'add-vendor',
        component:AddVendorComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'create-report',
        component:CreateReportComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'gallery',
        component:GalleryComponent,
        canActivate:[AdminAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }