import { Component, inject, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  sf = inject(SharedServiceService);
 

  movies: any[] = [];

  ngOnInit(): void {
    this.sf.moviesList().subscribe((data) => {
      this.movies = data
      this.movies.splice(4);
    });
  }

  loadMoreMovies() {
    this.sf.moviesList().subscribe((data) => {
      let movie = data;
      let newMovies = movie.slice(this.movies.length, this.movies.length + 4);
      this.movies = [...this.movies, ...newMovies];
    })
  }

}
