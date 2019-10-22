import { Injectable } from "@angular/core";
import { newsApiEndPoint } from "./Config/Endpoint";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private sourceName = new BehaviorSubject<string>("bbc-news");
  public currentSourceName = this.sourceName.asObservable();
  public source;

  public listofArticles = this.getAuthorsList().then(
    data => (this.articles = data)
  );
  public articles = this.listofArticles;
  constructor(private http: HttpClient) {
    // this.getAuthors().subscribe(data => console.log(data));
  }

  getChannels(): Observable<any> {
    return this.http.get("https://newsapi.org/v1/sources", {
      observe: "body",
      responseType: "json"
    });
  }

  getAuthorsList(): any {
    this.currentSourceName.subscribe(data => (this.source = data));
    let channelAuthorEndpoint = newsApiEndPoint.articlesEndPoint;
    const url = `${channelAuthorEndpoint}source=${this.source}&apiKey=${newsApiEndPoint.key}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json.articles)
      .catch(error => JSON.stringify(error));
  }

  getAuthors(): any {
    this.currentSourceName.subscribe(data => (this.source = data));
    let articleParams = new HttpParams()
      .set("source", "bbc-news")
      .append("apikey", newsApiEndPoint.key);
    return this.http.get("https://newsapi.org/v1/articles", {
      params: articleParams,
      observe: "response"
    });
  }

  updateSourceName(selectedSourceName) {
    this.sourceName.next(selectedSourceName);
  }
}
