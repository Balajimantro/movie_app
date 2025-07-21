import { Component, inject, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  inputData: string = ''
  moviesList: any[] = [];
  selectedMovie: any

  sf = inject(SharedServiceService)
  router = inject(Router)


  searchMovie(data: string) {
    this.sf.moviesList().subscribe((movie) => {
      this.moviesList = movie.map((item: any) => item.title )
      this.moviesList = this.moviesList.filter((movie) => movie.toLowerCase().includes(data.toLowerCase()));
    });
  }

  goToMoviePage(movie: any) {

    this.selectedMovie = movie;
    this.router.navigate(['/movie', this.selectedMovie]);
  }

}
