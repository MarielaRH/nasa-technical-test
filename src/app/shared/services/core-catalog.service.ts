import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assets } from '../interfaces/assets';
import { environment } from '../../../environments/environment';
import { urlDetail, Detail } from '../interfaces/detail';

const URL = environment.apiUrl;
const URL_ASSESTS = environment.apiUrlAssets;

@Injectable({
  providedIn: 'root'
})
export class CoreCatalogService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<Assets>{
    return this.http.get<Assets>(`${URL_ASSESTS}/${url}`);
  }

  getUrlDetail(url: string){
    return this.http.get<urlDetail>(`${URL}/metadata/${url}`);
  }

  getResource(id: string){
     return this.http.get<Assets>(`${URL}/asset/${id}`);
  }

  getInfoDetail(url: string, base?: string){
    return this.http.get<Detail>(`${url}`);
  }
}
