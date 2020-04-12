import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.css']
})
export class ProviderServicesComponent implements OnInit {
  isSuccess: boolean;
  value = [];
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
    this.router.navigate(['/compensation']);
  }

  reset(): void {
    this.isSuccess = false;
    this.isTerms = false;
    this.value = [];
  }

}
