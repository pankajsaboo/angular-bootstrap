import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despute-resolution',
  templateUrl: './despute-resolution.component.html',
  styleUrls: ['./despute-resolution.component.css']
})
export class DesputeResolutionComponent implements OnInit {
  isSuccess: boolean;
  isTerms = false;

  constructor(private router: Router) { }

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

  next():void {
    this.router.navigate(['/general-provisions']);
  }

  reset(): void {
    this.isSuccess = false;
    this.isTerms = false;
  }

}
