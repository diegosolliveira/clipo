import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaterComponent } from './later.component';

describe('LaterComponent', () => {
  let component: LaterComponent;
  let fixture: ComponentFixture<LaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
