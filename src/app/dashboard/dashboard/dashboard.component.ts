import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { CommonService } from 'src/app/common/common.service';
import { PointTableService } from 'src/app/point-table/point-table.service';
import { SchedulerService } from 'src/app/scheduler/scheduler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pointTable: Array<any> = []
  schedulerTable: Array<any> = []
  constructor(
    private commonService: CommonService,
    private pointTableService: PointTableService,
    private schedulerService: SchedulerService
  ) { }

  ngOnInit(): void {
    this.commonService.setCurrentPage('dashboard')
    this.fetchPointTable()
    this.fetchAllMatches(5)
  
  }

  fetchPointTable() {
    this.pointTableService.fetchTable()
    .subscribe(
      (response:any) =>{
        console.log('success',response)
      
      if(response.code === 'success') {
        this.pointTable = response.data
        console.log(this.pointTable)
      }
      else{
        this.pointTable=[]
      }
    },
      (error)=>{
        console.log(error)
      }
    )
  }
  fetchAllMatches(count:number){
    this.schedulerService.getAllMatchesByCount(count) 
      .subscribe(
        (response:any) => {
          console.log('success', response)
          if(response.code === 'success') {
            this.schedulerTable = response.data
            console.log(this.schedulerTable)
          }
          else{
            this.schedulerTable=[]
          }
        },
        (error)=>{
          console.log(error)
        }
      )
    }
}
