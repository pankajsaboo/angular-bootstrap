import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationComponentComponent } from './compensation-component.component';

describe('CompensationComponentComponent', () => {
  let component: CompensationComponentComponent;
  let fixture: ComponentFixture<CompensationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
