import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLineComponent } from './test-line.component';

describe('TestLineComponent', () => {
  let component: TestLineComponent;
  let fixture: ComponentFixture<TestLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
