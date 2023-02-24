export class GithubIssue {
  number: number;
  title: string;
  state: string;
  created_at: Date;
  constructor(id: number, title: string, status: string, created: Date) {
    this.number = id;
    this.title = title;
    this.state = status;
    this.created_at = created;
  }
}
