import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { GPTitleService } from '../services/gp-title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-provisions',
  templateUrl: './general-provisions.component.html',
  styleUrls: ['./general-provisions.component.css'],
  providers: [GPTitleService]
})
export class GeneralProvisionsComponent implements OnInit, AfterViewChecked {
  isSuccess: boolean;
  isAccept: boolean;
  isEdit: boolean;
  isDelete: boolean;
  title: string;
  oldTxt: string;
  newText: string;
  span: HTMLParagraphElement;
  isTerms = false;

  @ViewChild('content') inputEl: ElementRef; 

  constructor(private gpTitleService: GPTitleService,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    this.gpTitleService.changeEmitted$.subscribe((data: string) => {
      this.title = data;
    });
    this.cdRef.detectChanges();
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

  editBtn(text: string): void {
    this.isEdit = true;
    this.oldTxt = text;
  }

  saveBtn(): void {
    this.isEdit = false;
    console.log(this.inputEl.nativeElement.textContent);
  }

  deleteBtn(): void {
    this.isDelete = true;
  }

  reset(): void {
    this.isSuccess = false;
    this.isAccept = false;
    this.isEdit = false;
    this.isDelete = false;
    this.isTerms = false;
  }

  next():void {
    this.router.navigate(['/compensation']);
  }
}
