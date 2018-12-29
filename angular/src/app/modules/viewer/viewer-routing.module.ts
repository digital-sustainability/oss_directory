import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../../views/base/list/list.component';
import { DetailComponent } from '../../views/base/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':type',
    component: ListComponent
  },
  {
    path: ':type/new',
    loadChildren: '../editor/editor.module#EditorModule'
  },
  {
    path: ':type/:id',
    component: DetailComponent
  },
  {
    path: ':type/:id/edit',
    loadChildren: '../editor/editor.module#EditorModule'
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }
