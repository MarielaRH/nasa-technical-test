import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemDetailComponent,
    NotFoundComponent,
    InformationCardComponent,
    ActionSectionComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoreModule { }
