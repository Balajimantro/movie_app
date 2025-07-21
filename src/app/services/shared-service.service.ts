import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
    http = inject(HttpClient);

    constructor() { }

    moviesList() {
        return this.http.get<any>('assets/data.json')
    }

    findMovieByTitle(title: string) {
        return this.http.get<any>('assets/data.json').pipe(
            map((movies: any[]) => movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())))
        );
    }

}