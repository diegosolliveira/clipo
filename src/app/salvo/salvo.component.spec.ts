import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvoComponent } from './salvo.component';

describe('SalvoComponent', () => {
  let component: SalvoComponent;
  let fixture: ComponentFixture<SalvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
