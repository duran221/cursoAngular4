import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintPhotosComponent } from './paint-photos.component';

describe('PaintPhotosComponent', () => {
  let component: PaintPhotosComponent;
  let fixture: ComponentFixture<PaintPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
