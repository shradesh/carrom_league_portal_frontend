import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  currentPage: string = '';

  constructor (
    private _route: ActivatedRoute,
    private commonService: CommonService
  ) {}
  // title = 'carrom-app';
  ngOnInit() {
    console.log("Hello")
    this.commonService.$currentURL
    .subscribe(
      data => {
        console.log(data)
        this.currentPage = data;
      }
    )
  }
  
}
