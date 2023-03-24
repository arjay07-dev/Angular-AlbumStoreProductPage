import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private_albumUrl = '../assets/album.json';

  constructor(private_http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this.AlbumUrl)
  }
}