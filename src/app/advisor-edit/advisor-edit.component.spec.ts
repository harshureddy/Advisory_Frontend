import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorEditComponent } from './advisor-edit.component';

describe('AdvisorEditComponent', () => {
  let component: AdvisorEditComponent;
  let fixture: ComponentFixture<AdvisorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
