import { Component } from "@angular/core";

@Component({
  selector: "movies",
  templateUrl: "./movies.component.html"
})
export class MoviesComponent {
  movies = [
    { name: "A origem" },
    { name: "Matrix" },
    { name: "Parasita" },
    { name: "Blade Runner" }
  ];

  moviesFilter = [];

  ngOnInit() {
    this.moviesFilter = this.movies;
  }

  onChange(term) {
    this.moviesFilter = this.movies.filter(filmes => {
      return filmes.name.toLowerCase().indexOf(term) > -1;
    });
  }
}
