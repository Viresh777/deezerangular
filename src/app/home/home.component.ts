import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ArtistsAPI } from '../api/artitsts.api';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artists: any;
  artistSelected = false;
  displayedColumns = ['id','picture', 'name'];
  filterArtistDetail : any;
  artistSource = new MatTableDataSource<any>();


  constructor(private artistsAPI: ArtistsAPI,private dialog: MatDialog,private router: Router) {}

  ngOnInit() {
    //this.artistFilter('');  
  }

  artistFilter(filterValue: string) {
    this.artistsAPI.getArtists(filterValue);
  }

  getDetail(artistID){
    this.filterArtistDetail =  this.artistSource.data;
    this.filterArtistDetail.filter(function(item) {
      return item.id == artistID;
   });
   //Was going to use expandable columns, but ran out of time here, so used dialog to display results(stringified WIP)
    this.openAlertDialog('',JSON.stringify(this.filterArtistDetail),artistID);
  }

  goToArtistDetail(data) {
    this.router.navigate(['artist-detail'], {state: {data}});
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
