import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Errors } from "src/app/shared/constants/errors";
import { CoreCatalogService } from "src/app/shared/services/core-catalog.service";
import { Item } from "../../../shared/interfaces/assets";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  isShowRecents: boolean = true;
  loadingData: boolean = true;
  error = Errors;

  constructor(
    private coreCatalogService: CoreCatalogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadDataRecent();
  }

  loadDataRecent() {
    this.loadingData = true;
    this.isShowRecents = true;
    this.coreCatalogService.getData("recent.json").subscribe(
      (response) => {
        this.items = [];
        this.items = response.collection.items;
        this.loadingData = false;
      },
      (error) => {
        this.loadingData = false;
        this.messageService.add({
          severity: "error",
          summary: this.error.summary,
          detail: this.error.detail,
        });
      }
    );
  }

  loadDataPopular() {
    this.loadingData = true;
    this.isShowRecents = false;
    this.coreCatalogService.getData("popular.json").subscribe(
      (response) => {
        this.items = [];
        this.items = response.collection.items;
        this.loadingData = false;
      },
      (error) => {
        this.loadingData = false;
        this.messageService.add({
          severity: "error",
          summary: this.error.summary,
          detail: this.error.detail,
        });
      }
    );
  }

  search(search: string) {
    this.loadingData = true;
    this.coreCatalogService.getBySearch(search).subscribe(
      (response) => {
        this.items = response.collection.items;
        this.loadingData = false;
      },
      (error) => {
        this.loadingData = false;
        this.messageService.add({
          severity: "error",
          summary: this.error.summary,
          detail: this.error.detail,
        });
      }
    );
  }
}
