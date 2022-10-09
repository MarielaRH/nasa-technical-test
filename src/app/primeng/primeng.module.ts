import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    ToastModule
  ],
  exports:[
    FormsModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    ToastModule
  ]
})
export class PrimengModule { }
