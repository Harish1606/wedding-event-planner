import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { VendorAuthGuard } from './guards/vendor-auth.guard';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'user',
    component:UserComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'vendor',
    component:VendorComponent,
    canActivate:[VendorAuthGuard]
  },
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'vendor-login',
    component:VendorLoginComponent
  },
  {
    path:'user-register',
    component:UserRegisterComponent
  },
  {
    path:'blank-page',
    component:BlankPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
