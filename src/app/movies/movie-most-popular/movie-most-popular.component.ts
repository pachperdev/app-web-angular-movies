import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-most-popular',
  templateUrl: './movie-most-popular.component.html',
  styleUrls: ['./movie-most-popular.component.css']
})
export class MovieMostPopularComponent implements OnInit {

  listaMovies: any[] = [];
  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  private async loadMovies(){
    const movies = await this.movieService.listaMoviesPopular();
    this.listaMovies = movies.results;
    console.log(movies.results);
  }

}
