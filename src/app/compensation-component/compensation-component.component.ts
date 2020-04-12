import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compensation-component',
  templateUrl: './compensation-component.component.html',
  styleUrls: ['./compensation-component.component.css']
})
export class CompensationComponentComponent implements OnInit {
  isSuccess: boolean;
  data = [];
  value: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = [
      {
        serviceName: "All Services",
        codes: "1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F, 1461F",
        charges: "100% Billed Charges"
      }
    ];
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
    this.router.navigate(['/despute-resolution']);
  }

  reset(): void {
    this.isSuccess = false;
    this.value = false;
  }
}
