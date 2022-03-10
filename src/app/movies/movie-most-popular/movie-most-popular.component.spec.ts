import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMostPopularComponent } from './movie-most-popular.component';

describe('MovieMostPopularComponent', () => {
  let component: MovieMostPopularComponent;
  let fixture: ComponentFixture<MovieMostPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMostPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
