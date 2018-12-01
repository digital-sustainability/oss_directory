import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedInGuard } from './shared/auth/only-logged-in.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessfulComponent } from './auth/register-successful/register-successful.component';
import { RegisterConfirmComponent } from './auth/register-confirm/register-confirm.component';
import { EditComponent } from './auth/edit/edit.component';
import { ApiComponent } from './examples/api/api.component';
import {OssChangeEntryComponent} from "./oss-change-entry/oss-change-entry.component";
import {OssListComponent} from "./oss-list/oss-list.component";

const routes: Routes = [

    /*

    From Template

    */



  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {state: 'home'}
  },

  {
    path: 'example',
    component: ApiComponent,
    pathMatch: 'full',
    data: {state: 'home'}
  },

  {
    path: 'firmen',
    component: OssListComponent,
    pathMatch: 'full',
    data: {state: 'home'}
  },

  {
    path: 'create',
    component: OssChangeEntryComponent,
    pathMatch: 'full',
    data: {state: 'home'}
  },

  {
    path: 'update/:id',
    component: OssChangeEntryComponent,
  },

    /*
    {
        path: 'login',
        component: LoginComponent,
        data: { state: 'login' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { state: 'register' }
    },
    {
        path: 'register/successful',
        component: RegisterSuccessfulComponent,
        data: { state: 'registerSuccessful' }
    },
    {
        path: 'register/confirm',
        component: RegisterConfirmComponent,
        data: { state: 'registerConfirm' }
    },
    {
        path: 'user/edit',
        canActivate: [OnlyLoggedInGuard],
        component: EditComponent
    }

    */

    /*

    OSS Implementation

    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
