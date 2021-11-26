import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor( private http: HttpClient) { }
  adminLoginForm(url:string){
    return this.http.get(url)
  }
}
