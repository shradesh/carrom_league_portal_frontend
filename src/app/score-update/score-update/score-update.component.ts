import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score-update',
  templateUrl: './score-update.component.html',
  styleUrls: ['./score-update.component.css']
})
export class ScoreUpdateComponent implements OnInit {
  faEdit = faEdit

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    
  }
}
