export class Article {
  constructor(
    public title: string,
    public description: string,
    public publishedAt: string,
    public author: string,
    public urlToImage: string,
    public url: string
  ) {}
}
