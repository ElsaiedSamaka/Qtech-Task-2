import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) { }
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
  public loadRepoIssues(
    filter: string,
    sort: string,
    order: SortDirection,
  ): Observable<any> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=${filter}+in:title+repo:angular/components&sort=${sort}&order=${order}`;

    return this.http.get<any>(requestUrl);
  }
}