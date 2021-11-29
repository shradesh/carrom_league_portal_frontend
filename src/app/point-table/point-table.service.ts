import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class PointTableService {
  apiURL = API_URL;

  constructor(private http:HttpClient) { }

  fetchTable(){
    let url = `${this.apiURL}/getpointtable/`;
    return this.http.get(url)
  }
}

