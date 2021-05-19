import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortingExample } from './exaple.component';

describe('ExapleTableComponent', () => {
  let component: TableSortingExample;
  let fixture: ComponentFixture<TableSortingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortingExample ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortingExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
