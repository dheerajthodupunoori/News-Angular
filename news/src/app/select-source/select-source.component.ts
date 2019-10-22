import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-select-source",
  templateUrl: "./select-source.component.html",
  styleUrls: ["./select-source.component.css"]
})
export class SelectSourceComponent implements OnInit {
  public selectedSourceId;
  public channels = [];
  public articles = [];
  @Output() public sendArticlesToNewsfeedComponent = new EventEmitter();

  constructor(private _newsService: NewsService) {}

  //Called when component is initialized(only once).
  async ngOnInit() {
    await this._newsService.getChannels().subscribe(data => {
      this.channels = data.sources;
    });
    this.articles = await this._newsService.articles;
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
  }
  async sourceChanged(selectedSourceName) {
    this._newsService.updateSourceName(selectedSourceName);
    this._newsService.articles = await this._newsService.getAuthorsList();
    this.articles = await this._newsService.articles;
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
  }
}
