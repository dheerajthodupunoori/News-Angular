import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from "../article";
import { NewsService } from "../news.service";

@Component({
  selector: "app-create-article",
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})
export class CreateArticleComponent implements OnInit {
  public currentSourceName: string;
  public articles = [];
  article = new Article("", "", "", "", "", "");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    this.currentSourceName = this.route.snapshot.paramMap.get("sourceName");
  }

  addToArticles() {
    this._newsService.articles.push({
      title: this.article.title,
      author: this.article.author,
      description: this.article.description,
      url: this.article.url,
      urlToImage: this.article.urlToImage,
      publishedAt: this.article.publishedAt
    });
    this.router.navigate(["/newsFeed"]);
  }

  confirmBeforeNavigate() {
    return false;
  }
}
