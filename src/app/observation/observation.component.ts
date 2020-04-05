import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GPTitleService } from '../services/gp-title.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit, AfterViewInit {

  constructor(private gpTitleService: GPTitleService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.gpTitleService.emitChange('Observation/Treatment Room');
  }

}
