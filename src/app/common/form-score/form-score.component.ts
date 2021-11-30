import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-form-score',
  templateUrl: './form-score.component.html',
  styleUrls: ['./form-score.component.css']
})
export class FormScoreComponent implements OnInit {

  scoreFormGroup!: FormGroup;
  player1 = {
    name: 'Player 1',
    id: 1
  }
  player2 = {
    name: 'Player 2',
    id: 2
  }
  
  @Output() saveEvent= new EventEmitter<any>();
  isEdit: boolean = false;
  outputData: any;
  scoreData: any;
  constructor( 
    private commonService : CommonService
    ) { }

  ngOnInit(): void {
    this.commonService.$scoreData
    .subscribe(
      data => {
        console.log('score data', data)
        this.scoreData = data;
        this.scoreFormGroup.controls['matchID'].setValue(data.id);
        this.player1 = {
          name: data.player_one.sudo_name,
          id: data.player_one.id
        }
        this.player2 = {
          name: data.player_two.sudo_name,
          id: data.player_two.id
        }
      }
    )

    this.scoreFormGroup = new FormGroup({
      'winner': new FormControl('', [Validators.required]),
      'matchID': new FormControl('', [Validators.required])
    })
  }
  

  saveScore() {
    
    console.log(this.scoreFormGroup.value)
    let loserId;
    if (this.player1.id === this.scoreFormGroup.value.winner) {
      loserId = this.player2.id
    } else {
      loserId = this.player1.id
    }

    const outputData = {
      matchID: this.scoreFormGroup.value.matchID,
      winnerID: this.scoreFormGroup.value.winner,
      loserID: loserId
    }
    this.saveEvent.emit(outputData)
    this.scoreFormGroup.reset()
  }
}
