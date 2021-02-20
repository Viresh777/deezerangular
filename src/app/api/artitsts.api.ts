import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistsAPI {
  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getArtists(queryString) {
    let apiUrl = `https://api.deezer.com/search/artist?q=${queryString}`;
    return this.Get({ url: apiUrl });
  }

  private Get(options) {
    return this.http.get(this.cors_api_url + options.url);
  }
}
