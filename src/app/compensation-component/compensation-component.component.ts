import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compensation-component',
  templateUrl: './compensation-component.component.html',
  styleUrls: ['./compensation-component.component.css']
})
export class CompensationComponentComponent implements OnInit {
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
