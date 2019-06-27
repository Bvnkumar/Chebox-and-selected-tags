import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycomComponent } from './lazycom.component';

describe('LazycomComponent', () => {
  let component: LazycomComponent;
  let fixture: ComponentFixture<LazycomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazycomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazycomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
