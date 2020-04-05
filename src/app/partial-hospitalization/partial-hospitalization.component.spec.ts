import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHospitalizationComponent } from './partial-hospitalization.component';

describe('PartialHospitalizationComponent', () => {
  let component: PartialHospitalizationComponent;
  let fixture: ComponentFixture<PartialHospitalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialHospitalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
