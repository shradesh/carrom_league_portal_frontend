import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  schedulerTable: Array<any> = []

  constructor(
    private commonService: CommonService,
    private schedulerService: SchedulerService
  ) { }

  ngOnInit(): void {
    this.commonService.setCurrentPage('scheduler')
    this.fetchMatches()
  }
  fetchMatches() {
    this.schedulerService.getMatches()
      .subscribe(
        (response: any) => {
          console.log('success', response)
          if (response.code === 'success') {
            this.schedulerTable = response.data
            console.log(this.schedulerTable)
          }
          else {
            this.schedulerTable = []
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
