import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  apiURL = API_URL
  
  constructor(private http: HttpClient) { }
  
  // GetMatches
  getMatches() {
    let url = this.apiURL +'/getmatches/'
    return this.http.get(url)
  }
  // GetAllMatchesByCount
  getAllMatchesByCount(count:number) {
    // http://192.168.2.110:9000/getmatches/?numOfMatches=5
    let url= `${this.apiURL}/getmatches/?numOfMatches=${count}`
    return this.http.get(url);
  }
}
