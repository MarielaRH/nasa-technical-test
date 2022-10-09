import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreCatalogService } from '../../../shared/services/core-catalog.service';
import { switchMap } from 'rxjs/operators';
import { Detail } from 'src/app/shared/interfaces/detail';
import { forkJoin } from 'rxjs';
import { MediaType } from '../../../shared/constants/media-type';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  data: Detail = {};
  resourse: string = '';
  mediaType = MediaType;

  constructor(private route: ActivatedRoute, private coreCatalogService: CoreCatalogService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadDetails(params.id);
    })
  }

  loadDetails(id: string){
    this.coreCatalogService.getUrlDetail(id).pipe(
      switchMap(({location})=> {
        const calls = [this.coreCatalogService.getInfoDetail(location), this.coreCatalogService.getResource(id)]
        return forkJoin(calls);
      })
    ).subscribe(([detail, resourse]: any) => {
      this.data = detail;
      this.resourse = resourse.collection.items[0].href;
    })

  }

  goToHome(){
    this.router.navigate(['/general']);
  }

}
