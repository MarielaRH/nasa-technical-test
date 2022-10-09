import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'action-section',
  templateUrl: './action-section.component.html',
  styleUrls: ['./action-section.component.scss']
})
export class ActionSectionComponent implements OnInit {

  @Input() isShowRecents: boolean = true;
  @Output() handlerLoadRecent = new EventEmitter();
  @Output() handlerLoadPopular = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  loadDataRecent(){
    this.handlerLoadRecent.emit();
  }

  loadDataPopular(){
    this.handlerLoadPopular.emit();
  }

}
