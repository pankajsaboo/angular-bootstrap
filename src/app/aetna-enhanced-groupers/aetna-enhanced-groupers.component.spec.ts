import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AetnaEnhancedGroupersComponent } from './aetna-enhanced-groupers.component';

describe('AetnaEnhancedGroupersComponent', () => {
  let component: AetnaEnhancedGroupersComponent;
  let fixture: ComponentFixture<AetnaEnhancedGroupersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AetnaEnhancedGroupersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AetnaEnhancedGroupersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
