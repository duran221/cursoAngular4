import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Photo} from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {


  constructor(
    private _http: HttpClient
  ) {

  }

  getPhotos(){

    return this._http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?_limit=5");

  }

}
