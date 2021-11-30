import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ScoreUpdateService {
  apiURL = API_URL

  constructor(private http:HttpClient) { }
    //http://192.168.2.110:9000/score/update
  scoreUpdate(id:number, data:any) {
    let url = `${this.apiURL}/score/update/${id}/`;
    return this.http.put(url, data)
  }
}
