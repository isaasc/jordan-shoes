import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisSquareComponent } from './tennis-square.component';

describe('TennisSquareComponent', () => {
  let component: TennisSquareComponent;
  let fixture: ComponentFixture<TennisSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
