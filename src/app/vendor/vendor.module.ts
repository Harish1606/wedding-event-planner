import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from './vendor.routing';
import { VendorLoginService } from '../services/vendor-login.service';
import { VendorAuthGuard } from '../guards/vendor-auth.guard';
import { SendQuotationComponent } from './components/send-quotation/send-quotation.component';
import { ManagePackagesComponent } from './components/manage-packages/manage-packages.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { PackageComponent } from './components/package/package.component';

@NgModule({
  declarations: [
    VendorComponent,
    SendQuotationComponent,
    ManagePackagesComponent,
    ViewProfileComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    VendorRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [VendorLoginService,VendorAuthGuard]
})
export class VendorModule { }