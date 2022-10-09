import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Assets } from '../interfaces/assets';
import { environment } from '../../../environments/environment';
import { urlDetail, Detail } from '../interfaces/detail';
import { catchError } from 'rxjs/operators';

const URL = environment.apiUrl;
const URL_ASSESTS = environment.apiUrlAssets;

@Injectable({
  providedIn: 'root'
})
export class CoreCatalogService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<Assets>{
    return this.http.get<Assets>(`${URL_ASSESTS}/${url}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getUrlDetail(url: string): Observable<urlDetail>{
    return this.http.get<urlDetail>(`${URL}/metadata/${url}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getResource(id: string): Observable<Assets>{
     return this.http.get<Assets>(`${URL}/asset/${id}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getInfoDetail(url: string, base?: string): Observable<Detail>{
    return this.http.get<Detail>(`${url}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getBySearch(search: string): Observable<Assets>{
    const params = new HttpParams()
    .set('q', search)
    .set('page', 1)
    .set('media_type', 'image,video')
    return this.http.get<Assets>(`${URL}/search`, {params}).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
