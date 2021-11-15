import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user.routing';
import { UserComponent } from "./user.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { UserAuthGuard } from '../guards/user-auth.guard';
import { RequestQuotationComponent } from './components/request-quotation/request-quotation.component';
import { ViewQuotationComponent } from './components/view-quotation/view-quotation.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { PackageComponent } from './components/package/package.component';
import { ViewGalleryComponent } from './components/view-gallery/view-gallery.component';

@NgModule({
  declarations: [
    UserComponent,
    RequestQuotationComponent,
    ViewQuotationComponent,
    ViewProfileComponent,
    ViewRequestComponent,
    PackageComponent,
    ViewGalleryComponent
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserLoginService,UserAuthGuard]
})
export class UserModule { }