import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WordpressProvider {

  constructor(public http: HttpClient) {

  }

}
