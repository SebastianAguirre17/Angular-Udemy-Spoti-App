import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor( private http: HttpClient) { 
        // console.log('Spotify service listo');
    }

    getQuery( query:string ){
        const url = `https://api.spotify.com/v1/${ query }`;
        const headers = new HttpHeaders({
            'Authorization' : 'Bearer BQBEaIieq8sp89Q9s8WwuutiFRyLo2zTAmOW2OmsSuxuCK9uYMRJRTMHcS9DECQbfnr3coguvsgL6klwKFU'
        });

        return this.http.get( url, { headers } );
    }

    getNewReleases(){
        return this.getQuery('browse/new-releases')
                    .pipe( map( data => data['albums'].items )); 
                     
    }

    getArtistas( termino:string ){
        return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
            .pipe( map( data => data['artists'].items ));
    }

    getArtista( id:string ){
        return this.getQuery(`artists/${ id }`);
    }

    getTopTracks( id:string ){
        return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
                    .pipe( map( data => data['tracks']));
    }
}
