import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModalModule } from "ngx-bootstrap";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
 
import { DOIntakeComponent } from './views/dointake/dointake.component';
import { AddressComponent } from './views/child/address/address.component';
import { BillingratesComponent } from './views/child/billingrates/billingrates.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './guards/auth.guard';
 


@NgModule({
   imports: [

      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AppAsideModule,
      AppBreadcrumbModule.forRoot(),
      AppFooterModule,
      AppHeaderModule,
      AppSidebarModule,
      PerfectScrollbarModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      ChartsModule,
      FormsModule,
      HttpClientModule,
      ModalModule.forRoot()
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      ...APP_CONTAINERS,
     
      DOIntakeComponent,
      AddressComponent,
      BillingratesComponent,
      RegisterComponent,
     
      
   ],
   providers: [
      AuthGuard,
      AuthenticationService,
      UserService
      
 
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
