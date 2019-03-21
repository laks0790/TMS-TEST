import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './login/login.component';
import { DOIntakeComponent } from './views/dointake/dointake.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [

  
    { path: 'register', component: RegisterComponent },
   
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path :'doIntake',
        component : DOIntakeComponent
      }
      
      // {
      //   path: 'login',
      //   loadChildren: './views/login/login.module#LoginModule'
      // }
   ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
