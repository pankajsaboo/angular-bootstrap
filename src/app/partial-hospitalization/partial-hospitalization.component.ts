import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GPTitleService } from '../services/gp-title.service';

@Component({
  selector: 'app-partial-hospitalization',
  templateUrl: './partial-hospitalization.component.html',
  styleUrls: ['./partial-hospitalization.component.css']
})
export class PartialHospitalizationComponent implements OnInit, AfterViewInit {

  constructor(private gpTitleService: GPTitleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.gpTitleService.emitChange('Partial Hospitalisation (Day Hospital Treatment)');
  }

}
