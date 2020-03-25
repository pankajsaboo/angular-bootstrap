import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProvisionsComponent } from './general-provisions.component';

describe('GeneralProvisionsComponent', () => {
  let component: GeneralProvisionsComponent;
  let fixture: ComponentFixture<GeneralProvisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralProvisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProvisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
