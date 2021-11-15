import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AdminComponent,
    UserRequestComponent,
    AddVendorComponent,
    CreateReportComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [AdminLoginService,AdminAuthGuard]
})
export class AdminModule { }