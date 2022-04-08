import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2CategoryComponent } from './page2-category.component';

describe('Page2CategoryComponent', () => {
  let component: Page2CategoryComponent;
  let fixture: ComponentFixture<Page2CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2CategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
