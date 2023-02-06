import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NumbersService } from '../services/numbers.service';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  @Input() layer!: Layer;

  constructor(private NumbersService: NumbersService) {}

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-counter ${this.layer.layer}`)
  }

  public onIncrease(): void {
    this.NumbersService.pushData();
  }

  public onDecrease(): void {
    this.NumbersService.popData();
  }

}
