import { Component } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { GithubIssue } from '../github-issue';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  public current = 1;
  public items: any[] = [];
  public itemsToDisplay: any[] = [];
  public perPage = 5;
  public total = Math.ceil(this.items.length / this.perPage);

  ngOnInit(): void {
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  public onGoTo(page: number): void {
    this.current = page;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  public onNext(page: number): void {
    if (this.current < this.total) {
      this.current = page + 1;
      this.itemsToDisplay = this.paginate(this.current, this.perPage);
    }
  }

  public onPrevious(page: number): void {
    if (this.current > 1) {
      this.current = page - 1;
      this.itemsToDisplay = this.paginate(this.current, this.perPage);
    }
  }

  public paginate(current: number, perPage: number): string[] {
    return [...this.items.slice((current - 1) * perPage).slice(0, perPage)];
  }

  constructor(private githubService: GithubService) {
    this.loadData();
  }

  loadData(): void {
    this.githubService
      .loadRepoIssues('angular', 'created', 'desc')
      .subscribe((response) => {
        this.items = response.items;
        this.total = response.total_count;
        this.itemsToDisplay = this.paginate(this.current, this.perPage);
      });
  }
}
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}
