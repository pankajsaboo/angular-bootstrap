import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-provisions',
  templateUrl: './general-provisions.component.html',
  styleUrls: ['./general-provisions.component.css']
})
export class GeneralProvisionsComponent implements OnInit {
  isSuccess:boolean;
  isAccept: boolean;
  isEdit: boolean;
  isDelete: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  needChange(): void {
    this.isSuccess = true;
  }

  accept(): void {
    this.isSuccess = false;
  }

  initiateDiscussion(): void {
    this.isSuccess = false;
  }
  
  acceptBtn(): void {
    this.isAccept = true;
  }

  editBtn(): void {
    this.isEdit = true;
  }

  saveBtn(): void {
    this.isEdit = false;
  }

  deleteBtn(): void {
    this.isDelete = true;
  }
}
