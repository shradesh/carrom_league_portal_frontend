import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { PointTableService } from 'src/app/point-table/point-table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pointTable: Array<any> = []
  constructor(
    private commonService: CommonService,
    private pointTableService: PointTableService
  ) { }

  ngOnInit(): void {
    this.commonService.setCurrentPage('dashboard')
    this.fetchPointTable()
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
  ngOnDestroy(){

  }

}
