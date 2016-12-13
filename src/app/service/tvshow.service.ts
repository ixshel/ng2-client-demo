// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TvShow } from '../model/tvshow.model';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export /**
 * TvShowService
 */
    class TvShowService {
    constructor(private http: Http) { }

    private baseUrl = 'https://tvshowdemo.herokuapp.com/';

    // Fetch all existing tv shows
    getTvShows(): Observable<TvShow[]> {
        // Use get request
        return this.http.get(this.baseUrl + 'tvshows')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
    }

    // Add new TvShow
    addTvShow(body: Object): Observable<TvShow[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({
            'Content-type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(this.baseUrl + 'tvshow', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server Error'))
    }
}