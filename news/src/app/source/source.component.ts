import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-source",
  templateUrl: "./source.component.html",
  styleUrls: ["./source.component.css"]
})
export class SourceComponent implements OnInit, OnDestroy {
  public sourceName = "";
  public articles = [];
  public searchString = "";
  private x;
  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    this.x = this._newsService.currentSourceName.subscribe(
      data => (this.sourceName = data)
    );
  }

  ngOnDestroy() {
    this.x.unsubscribe();
  }
}
