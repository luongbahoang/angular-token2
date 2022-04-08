import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParientComponent } from './parient.component';

describe('ParientComponent', () => {
  let component: ParientComponent;
  let fixture: ComponentFixture<ParientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
