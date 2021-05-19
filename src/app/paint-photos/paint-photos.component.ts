import { Component, OnInit } from '@angular/core';

import {PhotosService} from '../services/photos.service';

import {Photo} from '../models/photo';

@Component({
  selector: 'app-paint-photos',
  templateUrl: './paint-photos.component.html',
  styleUrls: ['./paint-photos.component.css']
})
export class PaintPhotosComponent implements OnInit {

  public photos: Photo[] = [];
  constructor(
    public photoService: PhotosService
  ) { }

  ngOnInit(): void {

    this.photoService.getPhotos().subscribe(photos =>{
    this.photos= photos;
    console.log(photos);

    },error =>{
      console.log(error);
    });

  }

}
