import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { TitleComponent } from "./title/title.component";
import { MoviesComponent } from "./movies/movies.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TitleComponent,
    MoviesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
