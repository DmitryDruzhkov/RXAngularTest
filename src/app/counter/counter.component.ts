import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NumbersService } from '../services/numbers.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  constructor(private NumbersService: NumbersService) {}

  public ngDoCheck(): void {
    console.log(`app-counter`)
  }

  public onIncrease(): void {
    this.NumbersService.pushData();
  }

  public onDecrease(): void {
    this.NumbersService.popData();
  }

}
