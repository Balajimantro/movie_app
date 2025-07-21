import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-movie-page',
  standalone: false,
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit {

  movieTitle: string = '';
  movieDetails: any | null = null;

  route = inject(ActivatedRoute);
  sf = inject(SharedServiceService);

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.movieTitle = params['title'];
      this.sf.findMovieByTitle(this.movieTitle).subscribe((data: any[]) => {
        if (data.length > 0) {
          this.movieDetails = data[0]; 
        } else {
          this.movieDetails = null; // No movie found
        }
      })
    });
  }

}
