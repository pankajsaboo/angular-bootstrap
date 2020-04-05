import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GPTitleService } from '../services/gp-title.service';

@Component({
  selector: 'app-aetna-enhanced-groupers',
  templateUrl: './aetna-enhanced-groupers.component.html',
  styleUrls: ['./aetna-enhanced-groupers.component.css']
})
export class AetnaEnhancedGroupersComponent implements OnInit , AfterViewInit {

  constructor(private gpTitleService: GPTitleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.gpTitleService.emitChange('Aetna Enhanced Grouers (AEG)');
  }

}

