import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxComponent } from './counter-rx.component';

describe('CounterRxComponent', () => {
  let component: CounterRxComponent;
  let fixture: ComponentFixture<CounterRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CounterRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
