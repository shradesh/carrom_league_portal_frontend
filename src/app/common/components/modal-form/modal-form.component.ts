import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Output() saveEvent = new EventEmitter<any>();
  playerFormGroup!: FormGroup
  firstName = new FormControl('', [Validators.required])
  lastName = new FormControl('', [Validators.required])
  expertLevel = new FormControl('', [Validators.required])
  sudoName = new FormControl('', [Validators.required])
  isEdit: boolean = false;
  @ViewChild('closeModal') closeModalRef!: ElementRef;


  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.playerFormGroup = new FormGroup({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'expertLevel': this.expertLevel,
      'sudoName': this.sudoName
    })

    this.commonService.$playerData
      .subscribe(
        data => {
          if (data && Object.entries(data).length > 0) {
            this.firstName.setValue(data.first_name)
            this.lastName.setValue(data.last_name)
            this.sudoName.setValue(data.sudo_name)
            this.expertLevel.setValue(data.expert_level)
            this.isEdit = true;
          } else {
            this.firstName.setValue('')
            this.lastName.setValue('')
            this.sudoName.setValue('')
            this.expertLevel.setValue('')
            this.isEdit = false;
          }
        }
      )
  }
  submitForm() {
    this.closeModalRef.nativeElement.click();
    this.saveEvent.emit(this.playerFormGroup.value);
    if (this.isEdit) {
      this.commonService.setPlayerData(null)
    }
  }
  clearForm() {
    this.closeModalRef.nativeElement.click();
    this.playerFormGroup.reset()
    if (this.isEdit) {
      this.commonService.setPlayerData(null)
    }
  }
}
