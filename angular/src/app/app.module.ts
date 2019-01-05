import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SailsModule } from "angular2-sails";
import { HttpInterceptorService } from './shared/auth/http-interceptor.service';
import { AuthService } from './shared/auth/auth.service';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { RegisterSuccessfulComponent } from './views/auth/register-successful/register-successful.component';
import { RegisterConfirmComponent } from './views/auth/register-confirm/register-confirm.component';
import { EditComponent } from './views/auth/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { OssListComponent } from './oss-list/oss-list.component';
import { OssDetailViewComponent } from './oss-detail-view/oss-detail-view.component';
import { OssChangeEntryComponent } from './oss-change-entry/oss-change-entry.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FirmsComponent } from './firms/firms.component';
import { ProductsComponent } from './products/products.component';
import { ViewerModule } from './modules/viewer/viewer.module';

export function appInitFactory(authService: AuthService): () => Promise<any> {
  return () => authService.checkLogin().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterConfirmComponent,
    RegisterSuccessfulComponent,
    EditComponent,
    OssListComponent,
    OssDetailViewComponent,
    OssChangeEntryComponent,
    NavbarComponent,
    FirmsComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SailsModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    ViewerModule,
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {provide: APP_INITIALIZER, useFactory: appInitFactory, deps: [AuthService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
