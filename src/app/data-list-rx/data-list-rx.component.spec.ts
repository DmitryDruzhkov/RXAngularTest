import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListRxComponent } from './data-list-rx.component';

describe('DataListRxComponent', () => {
  let component: DataListRxComponent;
  let fixture: ComponentFixture<DataListRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataListRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
