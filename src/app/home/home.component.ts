import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ArtistsAPI } from '../api/artitsts.api';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  artists: any;
  artistSelected = false;
  displayedColumns = ['id','picture', 'name'];
  filterArtistDetail : any;
  artistSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private homeService: ArtistsAPI,private dialog: MatDialog) {}

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

  getDetail(artistID){
    this.filterArtistDetail =  this.artistSource.data;
    this.filterArtistDetail.filter(function(item) {
      return item.id == artistID;
   });
   //Was going to use expandable columns, but ran out of time here, so used dialog to display results(stringified WIP)
    this.openAlertDialog('',JSON.stringify(this.filterArtistDetail),artistID);
  }

  openAlertDialog(title,message,navigate) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        title:title,
        message: message,
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}
