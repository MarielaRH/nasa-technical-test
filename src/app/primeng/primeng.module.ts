import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TagModule
  ],
  exports:[
    FormsModule,
    InputTextModule,
    ButtonModule,
    TagModule
  ]
})
export class PrimengModule { }
