import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/common/common.service';
import { PlayerPageService } from '../player-page.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  playerTable: Array<any> = []
  expertLevelArray = ['', 'Beginner', 'Intermediate', 'Expert']
  isEdit: boolean = false;
  playerID: number = 0;
  @ViewChild('openModal') openModalRef!: ElementRef;

  constructor(
    private playerPageService: PlayerPageService,
    private commonService: CommonService
  ) { }
  ngOnInit(): void {
    this.getPlayer()
  }
  
  getPlayer() {
    this.playerPageService.playerListGet()
      .subscribe(
        (response: any) => {
          console.log('success', response)
          if (response.code === 'success') {
            this.playerTable = response.data
            console.log(this.playerTable)
          } else {
            this.playerTable = []
          }
        },
        (err) => {
          console.log(err)
        }
      )
  }

  setIsEdit() {
    this.isEdit = false;
  }
  save(value: any) {
    const firstName = value.firstName
    const lastName = value.lastName
    const sudoName = value.sudoName
    const expertLevel = value.expertLevel

    var formData = new FormData()
    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('sudo_name', sudoName)
    formData.append('expert_level', expertLevel)
    if (!this.isEdit) {
      this.playerPageService.playerCreate(formData)
        .subscribe(
          (response: any) => {
            console.log('sucessful', response.code)
            response.code === 'success' && this.getPlayer()
          },
          (err) => {
            console.log(err)
          }
        )
    } else {
      this.playerPageService.playerUpdate(this.playerID, formData)
        .subscribe(
          (response: any) => {
            console.log('success', response)
            response.code === 'success' && this.getPlayer()
          },
          error => {
            console.log(error)
          }
        )
    }
  }
  editPlayer(id: number) {
    console.log(id)
    this.openModalRef.nativeElement.click();
    for (const player of this.playerTable) {
      if (player.id === id) {
        this.isEdit = true;
        this.playerID = player.id;
        this.commonService.setPlayerData(player)
      }
    }
  }
  removePlayer(id: number) {
    console.log(id)
    this.playerPageService.playerDelete(id)
    .subscribe(
      (response:any) =>{
        console.log('sucsess',response)
        response.code === 'success' && this.getPlayer()
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}