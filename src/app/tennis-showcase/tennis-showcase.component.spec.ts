import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisShowcaseComponent } from './tennis-showcase.component';

describe('TennisShowcaseComponent', () => {
  let component: TennisShowcaseComponent;
  let fixture: ComponentFixture<TennisShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
