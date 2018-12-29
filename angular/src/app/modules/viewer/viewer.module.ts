import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';

import { ListComponent } from '../../views/base/list/list.component';
import { DetailComponent } from '../../views/base/detail/detail.component';
import { ListItemComponent } from '../../views/base/list-item/list-item.component';
import { VendorListComponent } from '../../views/vendor/vendor-list/vendor-list.component';
import { VendorListItemComponent } from '../../views/vendor/vendor-list-item/vendor-list-item.component';
import { VendorDetailComponent } from '../../views/vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from '../../views/product/product-list/product-list.component';
import { ProductListItemComponent } from '../../views/product/product-list-item/product-list-item.component';
import { ProductDetailComponent } from '../../views/product/product-detail/product-detail.component';
import { ReferenceListComponent } from '../../views/reference/reference-list/reference-list.component';
import { ReferenceListItemComponent } from '../../views/reference/reference-list-item/reference-list-item.component';
import { ReferenceDetailComponent } from '../../views/reference/reference-detail/reference-detail.component';
//import { EditorModule } from '../editor/editor.module';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../../shared/data/data-provider.service';
import { HttpClient } from 'selenium-webdriver/http';
import { RequestService } from '../../shared/data/request.service';
import { HttpService } from '../../shared/sails/http.service';
import { ApiUrl } from '../../shared/url/api-url';


/**
 * Responsible for any data displaying components
 * This module is lazy loaded
 * 
 * Make sure to declare any data displaying components here
 */
@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    //EditorModule,
  ],
  declarations: [
    ListComponent,
    DetailComponent,
    ListItemComponent,
    VendorListComponent,
    VendorListItemComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailComponent,
    ReferenceListComponent,
    ReferenceListItemComponent,
    ReferenceDetailComponent,
  ],
  providers: [
    DataProviderService,
    ApiUrl,
  ],
})
export class ViewerModule { }
