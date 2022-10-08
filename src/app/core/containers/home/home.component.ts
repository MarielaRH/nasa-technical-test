import { Component, OnInit } from '@angular/core';
import { Assets } from 'src/app/shared/interfaces/assets';
import { CoreCatalogService } from 'src/app/shared/services/core-catalog.service';
import { Item } from '../../../shared/interfaces/assets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  isShowRecents: boolean = true;

  constructor(private coreService: CoreCatalogService) { }

  ngOnInit(): void {
    this.loadDataRecent();
  }

  loadDataRecent(){
    this.isShowRecents = true;
    this.coreService.getData('recent.json').subscribe(response => {
      this.items = [];
      this.items = response.collection.items;
    })
  }

  loadDataPopular(){
    this.isShowRecents = false;
    this.coreService.getData('popular.json').subscribe(response => {
      this.items = [];
      this.items = response.collection.items;
    })
  }

}
