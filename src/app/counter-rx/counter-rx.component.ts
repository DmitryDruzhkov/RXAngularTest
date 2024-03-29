import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layer } from '../shared/interfaces';
import { NumbersService } from '../services/numbers.service';
import { MatButtonModule } from '@angular/material/button';
import { UnpatchModule } from '@rx-angular/template/unpatch';

@Component({
  selector: 'app-counter-rx',
  standalone: true,
  imports: [CommonModule, MatButtonModule, UnpatchModule],
  templateUrl: './counter-rx.component.html',
  styleUrls: ['./counter-rx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterRxComponent {
  @Input() layer!: Layer;

  constructor(private numbersService: NumbersService) {}

  /* public ngDoCheck(): void {
    console.log(`ngDoCheck app-counter rx ${this.layer.layer}`)
  } */

  public onIncrease(): void {
    this.numbersService.pushData();
  }

  public onDecrease(): void {
    this.numbersService.popData();
  }

  public alert() :void {
    console.log(`alert app-counter-rx ${this.layer?.layer}`);
  }
}
