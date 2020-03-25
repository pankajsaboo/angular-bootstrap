import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesputeResolutionComponent } from './despute-resolution.component';

describe('DesputeResolutionComponent', () => {
  let component: DesputeResolutionComponent;
  let fixture: ComponentFixture<DesputeResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesputeResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesputeResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
