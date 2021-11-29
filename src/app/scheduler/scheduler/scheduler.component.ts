import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(
    private commonService :CommonService
  ) { }

  ngOnInit(): void {
     this.commonService.setCurrentPage('scheduler')
  }

}
