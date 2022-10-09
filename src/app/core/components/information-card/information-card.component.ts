import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaType } from 'src/app/shared/constants/media-type';
import { Data } from '../../../shared/interfaces/assets';

@Component({
  selector: 'information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {
  @Input() source: string = '';
  @Input() data: Data = {
    nasa_id: '',
    title: ''
  };

  mediaType = MediaType;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(id: string){
    this.router.navigate([`detail/${id}`])
  }

}
