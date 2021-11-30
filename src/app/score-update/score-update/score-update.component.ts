import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/common/common.service';
import { SchedulerService } from 'src/app/scheduler/scheduler.service';
import { ScoreUpdateService } from '../score-update.service';


@Component({
  selector: 'app-score-update',
  templateUrl: './score-update.component.html',
  styleUrls: ['./score-update.component.css']
})
export class ScoreUpdateComponent implements OnInit {
  
  faEdit = faEdit;
  schedulerTable: Array<any>= []
  isEdit: boolean = false;
  playerID: number = 0;
  @ViewChild('openModal') openModalRef!: ElementRef;

  constructor( 
    private commonService:CommonService,
    private schedulerService: SchedulerService,
    private scoreUpdateService: ScoreUpdateService
  ) { }

  ngOnInit(): void {
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
  setIsEdit() {
    this.isEdit = false;

  }
  setScore(score: any) {
    console.log(score)
    this.commonService.setScoreData(score)
  }

  outputData(value:any){
    console.log(value)
    var formData = new FormData()
    formData.append('winner_player', value.winnerID)
    formData.append('loser_player', value.loserID)
    this.scoreUpdateService.scoreUpdate(value.matchID, formData)
    .subscribe(
      (response: any) => {
        console.log('success', response)
        if (response.code === 'success') {
          this.fetchMatches();
        }
      },
      err => {
        console.log(err)
      }
    )
  }
  ngOnDestroy(){
    
  }
}
