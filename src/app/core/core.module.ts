import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemDetailComponent,
    NotFoundComponent,
    InformationCardComponent,
    ActionSectionComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PrimengModule
  ]
})
export class CoreModule { }
