import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/general',
    pathMatch:'full'
  },
  {
    path: 'general',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: ItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
