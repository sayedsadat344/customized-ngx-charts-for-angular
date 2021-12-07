import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAreaComponent } from './pie-area.component';

describe('PieAreaComponent', () => {
  let component: PieAreaComponent;
  let fixture: ComponentFixture<PieAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
