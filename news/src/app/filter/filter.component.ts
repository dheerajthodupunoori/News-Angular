import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  public filterString: string;
  @Output() public sendSearchStringToParent = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.sendSearchStringToParent.emit(this.filterString);
  }
  onKey(searchValue) {
    this.sendSearchStringToParent.emit(searchValue);
  }
}
