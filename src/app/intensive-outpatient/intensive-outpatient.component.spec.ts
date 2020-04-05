import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensiveOutpatientComponent } from './intensive-outpatient.component';

describe('IntensiveOutpatientComponent', () => {
  let component: IntensiveOutpatientComponent;
  let fixture: ComponentFixture<IntensiveOutpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensiveOutpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensiveOutpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
