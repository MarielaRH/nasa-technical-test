import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'action-section',
  templateUrl: './action-section.component.html',
  styleUrls: ['./action-section.component.scss']
})
export class ActionSectionComponent implements OnInit {

  @Input() isShowRecents: boolean = true;
  @Output() handlerLoadRecent = new EventEmitter();
  @Output() handlerLoadPopular = new EventEmitter();
  @Output() handlerSearch = new EventEmitter();
  search: string = '';
  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();
  showActions: boolean = true;
  mediaTypesOptions = [
    {
      key: 'Video',
      value: 'video',
    },
     {
      key: 'Image',
      value: 'image',
    }
  ]
  mediaTypeSelected: any;

  constructor() { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        search: []
      }
    )
  }

  loadDataRecent(){
    this.handlerLoadRecent.emit();
  }

  loadDataPopular(){
    this.handlerLoadPopular.emit();
  }

  loadBySearch(event:KeyboardEvent){
    if(event.key === 'Enter' && this.form.controls.search.value){
      const search = this.form.controls.search.value;
      if(search && search.trim().length > 0){
        this.handlerSearch.emit(search);
        this.showActions = false;
      }else if(search.trim().length === 0){
        this.cleanInput();
      }
    }

    if(this.form.controls.search.value?.length === 0){
      this.cleanInput();
    }
  }

  cleanInput(){
    this.form.controls.search.reset();
    this.loadDataRecent();
    this.showActions = true;
  }

  onSelectedMediaType(){
  }

}
