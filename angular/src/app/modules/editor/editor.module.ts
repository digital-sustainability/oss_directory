import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { FormComponent } from '../../views/base/form/form.component';
import { ProductFormComponent } from '../../views/product/product-form/product-form.component';
import { ReferenceFormComponent } from '../../views/reference/reference-form/reference-form.component';
import { VendorFormComponent } from '../../views/vendor/vendor-form/vendor-form.component';

/**
 * Responsible for creating, updating and deleting processes by the user.
 * This module is lazy loaded
 * 
 * Make sure to declare any data manupilating view components here
 */


@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule
  ],
  declarations: [
    FormComponent,
    ProductFormComponent,
    ReferenceFormComponent,
    VendorFormComponent
  ]
})
export class EditorModule { }
