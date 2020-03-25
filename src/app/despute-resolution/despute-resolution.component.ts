import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despute-resolution',
  templateUrl: './despute-resolution.component.html',
  styleUrls: ['./despute-resolution.component.css']
})
export class DesputeResolutionComponent implements OnInit {
  isSuccess:boolean;
  
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

}
