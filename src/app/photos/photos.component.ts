import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import {PhotosService} from '../services/photos.service';

import {Photo} from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos : Photo[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  public albumesId : Array<number>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSortModule) sort: MatSortModule;


  constructor(
    private photosService : PhotosService
  ) {
    this.albumesId = new Array(1,2,3,4,5);
   }

  ngOnInit(): void {

    this.photosService.getPhotos().subscribe(photos =>{
      console.log(photos);
      this.photos= photos;
      this.dataSource= new MatTableDataSource<Photo>(this.photos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    },error =>{
      console.log(error);
    });

  }

  ngAfterViewInit() {
  }

}
