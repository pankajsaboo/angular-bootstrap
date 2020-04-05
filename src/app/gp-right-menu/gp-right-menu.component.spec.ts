import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpRightMenuComponent } from './gp-right-menu.component';

describe('GpRightMenuComponent', () => {
  let component: GpRightMenuComponent;
  let fixture: ComponentFixture<GpRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
