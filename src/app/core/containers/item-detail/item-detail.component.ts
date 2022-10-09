import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreCatalogService } from "../../../shared/services/core-catalog.service";
import { switchMap } from "rxjs/operators";
import { Detail } from "src/app/shared/interfaces/detail";
import { forkJoin } from "rxjs";
import { MediaType } from "../../../shared/constants/media-type";
import { MessageService } from "primeng/api";
import { Errors } from "src/app/shared/constants/errors";
interface RESOURCE {
  href: string;
}

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.scss"],
})
export class ItemDetailComponent implements OnInit {
  data: Detail = {};
  resourse: string = "";
  mediaType = MediaType;
  error = Errors;
  loadingData: boolean = true;
  loadingSource: boolean = true;
  @ViewChild("image") image: HTMLImageElement;
  @ViewChild("video") video: HTMLVideoElement;

  constructor(
    private route: ActivatedRoute,
    private coreCatalogService: CoreCatalogService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadDetails(params.id);
    });
  }

  loadDetails(id: string) {
    this.loadingData = true;
    this.loadingSource = true;
    this.coreCatalogService
      .getUrlDetail(id)
      .pipe(
        switchMap(({ location }) => {
          const calls = [
            this.coreCatalogService.getInfoDetail(location),
            this.coreCatalogService.getResource(id),
          ];
          return forkJoin(calls);
        })
      )
      .subscribe(
        ([detail, { collection }]: any) => {
          this.data = detail;
          this.resourse = this.getHrefResource(collection.items);
          this.loadingData = false;

          if (this.data["AVAIL:MediaType"] === this.mediaType.VIDEO) {
            setTimeout(()=>{
              let video = document.querySelector('video') as HTMLVideoElement;
              video.addEventListener("canplaythrough", () => {
                this.resourceLoaded();
              });
            },0)
          }
        },
        (error) => {
          this.loadingData = false;
          this.loadingSource = false;
          this.messageService.add({
            severity: "error",
            summary: this.error.summary,
            detail: this.error.detail,
          });
          this.goToHome();
        }
      );
  }

  getHrefResource(items: []) {
    let href: any = null;
    let extension: any = null;

    if (this.data["AVAIL:MediaType"] === this.mediaType.IMAGE) {
      extension = ".jpg";
    } else if (this.data["AVAIL:MediaType"] === this.mediaType.VIDEO) {
      extension = ".mp4";
    }

    if (extension) {
      items.forEach((item: RESOURCE) => {
        if (item.href.includes(extension) && href === null) {
          href = item.href;
          return;
        }
      });
    }
    return href;
  }

  goToHome() {
    this.router.navigate(["/general"]);
  }

  resourceLoaded() {
    setTimeout(()=>{
      this.loadingSource = false;
    },0)
  }
}
