import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GPTitleService } from '../services/gp-title.service';

@Component({
  selector: 'app-intensive-outpatient',
  templateUrl: './intensive-outpatient.component.html',
  styleUrls: ['./intensive-outpatient.component.css']
})
export class IntensiveOutpatientComponent implements OnInit, AfterViewInit {

  constructor(private gpTitleService: GPTitleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.gpTitleService.emitChange('Intensive Outpatient');
  }

}
