import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { PointTableService } from '../point-table.service';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit {
  pointTable: Array<any> = []

  constructor(
    private commonService: CommonService,
    private pointTableService : PointTableService
  ) { }

  ngOnInit(): void {
    this.commonService.setCurrentPage('point-table')
    this.fetchTable()
  }
  fetchTable(){
    this.pointTableService.fetchTable()
    .subscribe(
      (response:any) =>{
        console.log('Success',response)
        if (response.code === 'success') {
          this.pointTable = response.data
          console.log(this.pointTable)
        }
        else{
          this.pointTable = []
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
