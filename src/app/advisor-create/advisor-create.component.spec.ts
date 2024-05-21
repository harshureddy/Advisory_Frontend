import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorCreateComponent } from './advisor-create.component';

describe('AdvisorCreateComponent', () => {
  let component: AdvisorCreateComponent;
  let fixture: ComponentFixture<AdvisorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
