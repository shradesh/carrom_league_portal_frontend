import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerPageService {

  apiURL = API_URL;
  httpHeaders = new HttpHeaders().set(
    'Access-Control-Allow-Origin', '*'
  )
  constructor(private http: HttpClient) { }


  playerCreate(data: any) {
    let url = `${this.apiURL}/player/`;
    return this.http.post(url, data)
  }
  playerGet(id: number) {
    let url = `${this.apiURL}/player/${id}`;
    console.log(url)
    return this.http.get(url)
  }
  playerListGet() {
    let url = `${this.apiURL}/getplayer/`;
    return this.http.get(url)
  }
  playerUpdate(id: number, data: any) {
    let url = `${this.apiURL}/player/${id}/`;
    return this.http.put(url, data)
  }
  playerDelete(id: number) {
    let url = `${this.apiURL}/player/${id}/`;
    return this.http.delete(url)
  }
}
