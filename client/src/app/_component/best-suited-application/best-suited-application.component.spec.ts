import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSuitedApplicationComponent } from './best-suited-application.component';

describe('BestSuitedApplicationComponent', () => {
  let component: BestSuitedApplicationComponent;
  let fixture: ComponentFixture<BestSuitedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSuitedApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSuitedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
