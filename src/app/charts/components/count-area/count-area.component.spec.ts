import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAreaComponent } from './count-area.component';

describe('CountAreaComponent', () => {
  let component: CountAreaComponent;
  let fixture: ComponentFixture<CountAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
