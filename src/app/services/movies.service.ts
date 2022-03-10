import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d0369418d220ad46dc45bfdaeb80b2ab';

  constructor(
    private http: HttpClient
  ) {}
  listaMoviesPopular(): Promise<any>{
    return this.http.get(this.movieUrl).toPromise();
  }
}
