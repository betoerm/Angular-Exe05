import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-component",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  term: string;

  @Output() retorno = new EventEmitter();

  onChange() {
    console.log("onChange");
  }

  feedback(event) {
    this.retorno.emit(event);
  }
}
