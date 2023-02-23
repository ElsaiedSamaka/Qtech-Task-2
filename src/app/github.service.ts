import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getRepoIssues(
    filter: string,
    sort: string,
    order: SortDirection,
    page: number,
    perpage: number
  ): Observable<any> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=${filter}+in:title+repo:angular/components&sort=${sort}&order=${order}&page=${page}&per_page=${perpage}`;

    return this.http.get<any>(requestUrl);
  }
}
