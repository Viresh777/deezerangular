import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ArtistsAPI } from '../api/artitsts.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  artists: any;
  artistSelected = false;
  displayedColumns = ['id','picture', 'name','nb_fan'];
  artistSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private homeService: ArtistsAPI) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.artistSource.sort = this.sort;
    this.artistSource.paginator = this.paginator;
  }

  artistFilter(filterValue: string) {
    this.homeService.getArtists(filterValue).subscribe(
      res => {
        this.artists = res;
        this.artistSource.data = this.artists.data;
      },
      err => {
        console.error(err);
      }
    );
  }
}
