import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistsAPI {
  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  artistsData$;
  artistsTopTracksData$;
  artistsAlbumsData$;

  getArtists(queryString) {
    let apiUrl = `https://api.deezer.com/search/artist?q=${queryString}`;
    return this.http.get(this.cors_api_url + apiUrl).subscribe(async (data: {data: any}) => {
      this.artistsData$ = await data.data;
    });
  }

  getTopTracksArtists(artistID) {
    let apiUrl = `https://api.deezer.com/artist/${artistID}/top`;
    return this.http.get(this.cors_api_url + apiUrl).subscribe(async (data: {data: any}) => {
      this.artistsTopTracksData$ = await data.data;
    });
  }

  getArtistsAlbums(artistID) {
    let apiUrl = `https://api.deezer.com/artist/${artistID}/albums`;
    return this.http.get(this.cors_api_url + apiUrl).subscribe(async (data: {data: any}) => {
      this.artistsAlbumsData$ = await data.data;
    });
  }

}
