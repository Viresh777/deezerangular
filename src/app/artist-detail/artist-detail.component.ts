import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ArtistsAPI } from '../api/artitsts.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit,AfterViewInit {

  obj: any[];
  topTracksDisplayedColumns = ['title','audio'];
  artistAlbumDisplayedColumns = ['title'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,private artistsAPI: ArtistsAPI,) { }
  ngOnInit() {
    this.obj = history.state.data;
    this.getArtistTopTracks(history.state.data.id);
    this.getArtistAblums(history.state.data.id);
  }

  ngAfterViewInit() {

  }

  
  getArtistTopTracks(artistID: string) {
    this.artistsAPI.getTopTracksArtists(artistID);

  }

  getArtistAblums(artistID: string) {
    this.artistsAPI.getArtistsAlbums(artistID);
   
  }


}
