import { FormsModule } from '@angular/forms';
import { VendorModule } from './vendor/vendor.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { UserLoginService } from './services/user-login.service';
import { UserAuthGuard } from './guards/user-auth.guard';
import { AdminLoginService } from './services/admin-login.service';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { VendorLoginService } from './services/vendor-login.service';
import { VendorAuthGuard } from './guards/vendor-auth.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    VendorLoginComponent,
    WelcomeComponent,
    MainNavComponent,
    UserRegisterComponent,
    BlankPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    VendorModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [UserLoginService,UserAuthGuard,AdminLoginService,AdminAuthGuard,VendorLoginService,VendorAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
